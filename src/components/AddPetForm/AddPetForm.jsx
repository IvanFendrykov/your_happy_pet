import { useState } from 'react';
import {
  BackBtn,
  BtnBox,
  NextBtn,
} from '../../pages/AddPetPage/AddPetPage.styled';
import { useSelector } from 'react-redux';
import symbolDefs from '../../images/symbol-defs.svg';
import {
  LabelInput,
  PetForm,
  InputAdd,
  DivWrapper,
  LabelFile,
  FileWrapper,
  InputFile,
  SvgIcon,
  CommentInput,
  StyledDatePicker,
} from './AddPetForm.styled';
import toast from 'react-hot-toast';
import { postMethod } from '../../pages/AddPetPage';
import { ArrowLeft } from '../../images/svg/svgIcons';
import { useNavigate } from 'react-router-dom';



const AddPetForm = ({ changeColors, setActiveComponent, setColors }) => {
  const token = useSelector((state) => state.auth.token);
  const [submit, setSubmit] = useState('button');

  const [name, setPetName] = useState('');

  const [typeOfPet, setPetType] = useState('');

  const [comments, setComment] = useState('');
  const [image, setSelectedImage] = useState(null);
  const [fileImage, setFileImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [step, setStep] = useState(1);
  const [next, setNext] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setPetName(value);
        break;
      case 'typeOfPet':
        setPetType(value);
        break;
      case 'comments':
        setComment(value);
        break;
      case 'image':
        value;
        break;
      default:
        break;
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const urlImage = URL.createObjectURL(file);
      setSelectedImage(urlImage);
      setFileImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !comments) {
      toast.error('Complete all fields');
      return;
    }

    const formData = new FormData();
    formData.append('submit', submit);
    formData.append('name', name);
    formData.append('birthDay', selectedDate);
    formData.append('typeOfPet', typeOfPet);
    formData.append('comments', comments);
    formData.append('image', fileImage);
    setActiveComponent(null);

   await postMethod('myPet', formData, token);
    toast.success('Post has been posted');
    navigate(-1)
  };

  const handleNext = () => {
    const newColor = '#00C3AD';
    if (!name || !selectedDate || !typeOfPet) {
      toast.error('Complete all fields');
      return;
    }
    setStep((prev) => prev + 1);

    changeColors(newColor);
    setNext(true);

    setTimeout(() => {
      setSubmit('submit');
    }, 10);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);

    if (step === 1) {
      setActiveComponent(null);

      setTimeout(() => {
        setColors(['#54ADFF', '#CCE4FB', '#CCE4FB']);
      }, 10);
    }

    const newColor = null;
    changeColors(newColor);

    setNext(false);
    setTimeout(() => {
      setSubmit('button');
    }, 10);
  };

  return (
    <PetForm onSubmit={handleSubmit} encType="multipart/form-data">
      {!next ? (
        <DivWrapper>
          <LabelInput>
            Pet’s name
            <InputAdd
              type="text"
              placeholder="Type name pet"
              name="name"
              onChange={handleInputChange}
            />
          </LabelInput>
          <LabelInput>
            Date of birth
            <StyledDatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Type date of birth"
              dateFormat="dd/MM/yyyy"
            />
          </LabelInput>
          <LabelInput>
            Type
            <InputAdd
              type="text"
              placeholder="Type of pet"
              name="typeOfPet"
              onChange={handleInputChange}
            />
          </LabelInput>
        </DivWrapper>
      ) : (
        <>
          <LabelFile>
            Load the
            <br /> pet’s image:
            <FileWrapper>
              {image ? (
                <img
                  src={image}
                  alt="Selected"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '25px',
                  }}
                />
              ) : (
                <>
                  <InputFile
                    type="file"
                    onChange={handleFileChange}
                    name="image"
                  />
                  <SvgIcon width="24" height="24">
                    <use href={symbolDefs + '#plus'} fill="white"></use>
                  </SvgIcon>
                </>
              )}
            </FileWrapper>
          </LabelFile>
          <LabelInput>
            Comments
            <CommentInput
              placeholder="Comment"
              name="comments"
              onChange={handleInputChange}
            />
          </LabelInput>
        </>
      )}

      <BtnBox>
        <NextBtn type={submit} onClick={handleNext}>
        {submit === 'button' ? 'Next' : 'Done'}
          <svg width="24" height="24">
            <use href={symbolDefs + '#pawprint-1'} fill="white"></use>
          </svg>
        </NextBtn>
        <BackBtn type="button" onClick={handleBack}>
          <ArrowLeft stroke="#54ADFF" />
          Back
        </BackBtn>
      </BtnBox>
    </PetForm>
  );
};

export default AddPetForm;
