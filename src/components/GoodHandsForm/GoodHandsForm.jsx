import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BackBtn,
  BtnBox,
  NextBtn,
} from '../../pages/AddPetPage/AddPetPage.styled';

import symbolDefs from '../../images/symbol-defs.svg';
import {
  LabelInput,
  PetForm,
  InputAdd,
  DivWrapper,
  // LabelFile,
  // FileWrapper,
  InputFile,
  SvgIcon,
  CommentInput,
  StyledDatePicker,
} from '../AddPetForm/AddPetForm.styled';
import {
  CheckBoxWrap,
  LabelChekbox,
  SexTitle,
  InputChekbox,
  DownInputBox,
  FileWrapperImg,
  LabelFileWrapperImg,
  DivContainer,
  FlexContainer,
  InputAddInfo,
} from '../SellPetForm/SellPetForm.styled';
import { postMethod } from '../../pages/AddPetPage';
import toast from 'react-hot-toast';
import { ArrowLeft, Female, Male } from '../../images/svg/svgIcons';
import { useNavigate } from 'react-router-dom';

const GoodHandsForm = ({ changeColors, setActiveComponent, setColors }) => {
  const token = useSelector((state) => state.auth.token);
  const [submit, setSubmit] = useState('button');

  const [step, setStep] = useState(1);

  const [title, setTitle] = useState('');
  const [name, setPetName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [typeOfPet, setPetType] = useState('');
  const [location, setLocation] = useState('');
  const [comments, setComment] = useState('');
  const [image, setSelectedImage] = useState(null);
  const [fileImage, setFileImage] = useState(null);
  const [sex, setSex] = useState(null);

  const navigate = useNavigate();
  const [next, setNext] = useState(false);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'name':
        setPetName(value);
        break;

      case 'typeOfPet':
        setPetType(value);
        break;
      case 'location':
        setLocation(value);
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

    if (!location || !fileImage || !sex || !comments) {
      toast.error('Complete all fields');
      return;
    }

    const formData = new FormData();
    formData.append('submit', submit);
    formData.append('category', 'inGoodHands');
    formData.append('title', title);
    formData.append('name', name);
    formData.append('birthDay', selectedDate);
    formData.append('typeOfPet', typeOfPet);
    formData.append('comments', comments);
    formData.append('gender', sex);
    formData.append('image', fileImage);
    formData.append('location', location);

    await postMethod('notices', formData, token);
    toast.success('Post has been posted');
    navigate(-1);
  };

  const handleNext = () => {
    const newColor = '#00C3AD';

    if (!title || !name || !selectedDate || !typeOfPet) {
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
  const handleCheckbox = (checkbox) => {
    if (sex === checkbox) {
      setSex(null);
    } else {
      setSex(checkbox);
    }
  };
  return (
    <PetForm onSubmit={handleSubmit} encType="multipart/form-data">
      {!next ? (
        <DivWrapper>
          <LabelInput>
            Title of add
            <InputAdd
              type="text"
              placeholder="Title of add"
              name="title"
              onChange={handleInputChange}
            />
          </LabelInput>
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
          <DivContainer>
            <FlexContainer>
              <SexTitle>The sex</SexTitle>
              <CheckBoxWrap>
                <InputChekbox
                  id="female"
                  type="radio"
                  name="sex"
                  checked={sex === 'female'}
                  onChange={() => handleCheckbox('female')}
                ></InputChekbox>
                <LabelChekbox htmlFor="female">
                  <Female stroke={sex === 'female' ? '#FFFFFF' : '#F43F5E'} />
                  female
                </LabelChekbox>

                <InputChekbox
                  id="male"
                  type="radio"
                  name="sex"
                  checked={sex === 'male'}
                  onChange={() => handleCheckbox('male')}
                />
                <LabelChekbox htmlFor="male">
                  <Male stroke={sex === 'male' ? '#FFFFFF' : '#54ADFF'} />
                  male
                </LabelChekbox>
              </CheckBoxWrap>
              <LabelFileWrapperImg>
                Load the pet’s image:
                <FileWrapperImg>
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
                </FileWrapperImg>
              </LabelFileWrapperImg>
            </FlexContainer>
            <FlexContainer>
              <DownInputBox>
                <LabelInput>
                  Location
                  <InputAddInfo
                    type="text"
                    placeholder="Title of add"
                    name="location"
                    onChange={handleInputChange}
                  />
                </LabelInput>

                <LabelInput>
                  Comments
                  <CommentInput
                    placeholder="Comment"
                    name="comments"
                    onChange={handleInputChange}
                  />
                </LabelInput>
              </DownInputBox>
            </FlexContainer>
          </DivContainer>
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

export default GoodHandsForm;
