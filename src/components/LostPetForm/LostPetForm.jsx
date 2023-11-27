import { useState } from 'react';
import axios from 'axios';
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
} from '../AddPetForm/AddPetForm.styled';
import {
  CheckBoxWrap,
  LabelChekbox,
  SexTitle,
  InputChekbox,
  SVGsex,
  DownInputBox,
} from '../SellPetForm/SellPetForm.styled';
import { postMethod } from '../../pages/AddPetPage';
import toast from 'react-hot-toast';

const LostPetForm = ({ changeColors, setActiveComponent, setColors }) => {
  const [submit, setSubmit] = useState('button');

  const [step, setStep] = useState(1);

  const [title, setTitle] = useState('');
  const [name, setPetName] = useState('');
  const [birthDay, setDateOfBirth] = useState('');
  const [typeOfPet, setPetType] = useState('');
  const [location, setLocation] = useState('');
  const [comments, setComment] = useState('');
  const [image, setSelectedImage] = useState(null);
  const [fileImage, setFileImage] = useState(null);
  const [sex, setSex] = useState(null);

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
      case 'birthDay':
        setDateOfBirth(value);
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
    formData.append('title', title);
    formData.append('name', name);
    formData.append('birthDay', birthDay);
    formData.append('typeOfPet', typeOfPet);
    formData.append('comments', comments);
    formData.append('gender', sex);
    formData.append('image', fileImage);
    formData.append('location', location);

    postMethod('lostFound', formData);
    try {
      const response = await axios.post(
        'https://happy-pets-rest-api.onrender.com/api/lostFound',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setActiveComponent(null);
      console.log('Pet added successfully', response.data);
    } catch (error) {
      console.error('Error adding pet:', error.message);
    }
  };

  const handleNext = () => {
    const newColor = '#00C3AD';

    if (!title || !name || !birthDay || !typeOfPet) {
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
            <InputAdd
              type="text"
              placeholder="01/01/2001"
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
          <SexTitle>The Sex</SexTitle>
          <CheckBoxWrap>
            <InputChekbox
              id="female"
              type="radio"
              name="sex"
              checked={sex === 'female'}
              onChange={() => handleCheckbox('female')}
            ></InputChekbox>
            <LabelChekbox htmlFor="female">
              <SVGsex width="24" height="24">
                <use href={symbolDefs + '#female'} fill="red"></use>
              </SVGsex>
              Female
            </LabelChekbox>

            <InputChekbox
              id="male"
              type="radio"
              name="sex"
              checked={sex === 'male'}
              onChange={() => handleCheckbox('male')}
            />
            <LabelChekbox htmlFor="male">
              <SVGsex width="24" height="24">
                <use href={symbolDefs + '#male'} fill="red"></use>
              </SVGsex>
              Male
            </LabelChekbox>
          </CheckBoxWrap>
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
                  <SvgIcon width="50" height="50">
                    <use href={symbolDefs + '#plus'} fill="white"></use>
                  </SvgIcon>
                </>
              )}
            </FileWrapper>
          </LabelFile>

          <DownInputBox>
            <LabelInput>
              Location
              <InputAdd
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
        </>
      )}

      <BtnBox>
      <BackBtn type="button" onClick={handleBack}>
          <svg width="24" height="24">
            <use href={symbolDefs + '#ArrowLeft'}></use>
          </svg>
          Back
        </BackBtn>
        <NextBtn type={submit} onClick={handleNext}>
          Next
          <svg width="24" height="24">
            <use href={symbolDefs + '#pawprint-1'} fill="white"></use>
          </svg>
        </NextBtn>
      </BtnBox>
    </PetForm>
  );
};

export default LostPetForm;
