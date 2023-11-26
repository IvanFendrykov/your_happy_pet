import { useState } from 'react';
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
  LabelFile,
  FileWrapper,
  InputFile,
  SvgIcon,
  CommentInput,
} from './AddPetForm.styled';
import toast from 'react-hot-toast';
import { postMethod } from '../../pages/AddPetPage';

const AddPetForm = ({ changeColors, setActiveComponent, setColors }) => {
  const [submit, setSubmit] = useState('button');
  const [name, setPetName] = useState('');
  const [birthDay, setDateOfBirth] = useState('');
  const [typeOfPet, setPetType] = useState('');
  const [comments, setComment] = useState('');
  const [image, setSelectedImage] = useState(null);
  const [fileImage, setFileImage] = useState(null);

  const [step, setStep] = useState(1);
  console.log(step);
  const [next, setNext] = useState(false);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setPetName(value);
        break;
      case 'birthDay':
        setDateOfBirth(value);
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
    formData.append('birthDay', birthDay);
    formData.append('typeOfPet', typeOfPet);
    formData.append('comments', comments);
    formData.append('image', fileImage);
    setActiveComponent(null);

    postMethod('myPet', formData);
  };

  const handleNext = () => {
    const newColor = '#00C3AD';
    if (!name || !birthDay || !typeOfPet) {
      toast.error('Complete all fields');
      return;
    }
    setStep((prev) => prev + 1);

    changeColors(newColor);
    setNext(true);

    setTimeout(() => {
      setSubmit('submit');
    }, 500);
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
    }, 500);
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
            <InputAdd
              type="text"
              placeholder="Type date of birth"
              name="birthDay"
              onChange={handleInputChange}
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
          Next
          <svg width="24" height="24">
            <use href={symbolDefs + '#pawprint-1'} fill="white"></use>
          </svg>
        </NextBtn>
        <BackBtn type="button" onClick={handleBack}>
          <svg width="24" height="24">
            <use href={symbolDefs + '#arrow-left'} fill="white"></use>
          </svg>
          Back
        </BackBtn>
      </BtnBox>
    </PetForm>
  );
};

export default AddPetForm;
