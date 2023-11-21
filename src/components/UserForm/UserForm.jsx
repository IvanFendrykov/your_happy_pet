import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik'; //
import 'flatpickr/dist/flatpickr.min.css'; //
import { BsCamera, BsCheckLg, BsX } from 'react-icons/bs'; //
import {
  StyledForm,
  UserPhoto,
  FileInput,
  FileInputLabel,
  SubmitButton,
  Error,
  FieldsContainer,
  Text,
  Input,
  Label,
} from './UserForm.styled'; //
import validationSchema from 'utils/schemas/validationSchema'; //
import { useDispatch, useSelector } from 'react-redux'; //
// import { updateUserData } from 'redux/auth/authOperations';

// import { selectIsLoading, selectUser } from 'redux/auth/authSelectors';
import { selectUser } from 'redux/auth/authSelectors';
// import Loader from 'components/Loader/Loader';

const UserForm = ({ disabled, setIsFormDisabled }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
//   const loading = useSelector(selectIsLoading);
    const loading = false;
  const [errorsVisible, setErrorsVisible] = useState(true);
  const [preview, setPreview] = useState(user.avatarURL);
  const [showConfirm, setShowConfirm] = useState(false);

//   const initialValues = {
//     avatar: user.avatarURL,
//     name: user.name,
//     email: user.email,
//     birthday: user.birthday,
//     phone: user.phone,
//     city: user.city,
//   };
const initialValues = {
    avatar: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F3177%2F3177440.png&tbnid=8QiS3pbwiwJ_JM&vet=12ahUKEwisgZ2KttWCAxWI4AIHHfEVCjUQMygCegQIARBG..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_3177440&docid=OwrTpL_tGVFPEM&w=512&h=512&q=user&ved=2ahUKEwisgZ2KttWCAxWI4AIHHfEVCjUQMygCegQIARBG",
    name: "telezhka",
    email: "rtelik58@gmail.com",
    birthday: "22.07.2001",
    phone: "+380682114542",
    city: "Kyiv",
  };
    
  const formikProps = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      if (Object.keys(formikProps.errors).length === 0) {
        const formData = new FormData();
        for (let key in values) {
          formData.append(`${key}`, values[key]);
        }
        dispatch(updateUserData(formData));

        setIsFormDisabled(prevState => !prevState);
      }
    },
  });

  useEffect(() => {
    if (loading === false) {
      setPreview(user.avatarURL);
    }
  }, [loading, user.avatarURL]);

  const handleClose = e => {
    if (e.currentTarget.id === 'cancel') {
      setPreview(user.avatarURL);
    }
    setShowConfirm(false);
  };

  useEffect(() => {
    if (!disabled) {
      setErrorsVisible(true);
    } else {
      setErrorsVisible(false);

      setPreview(user.avatarURL);
      setShowConfirm(false);
    }
  }, [disabled, user.avatarURL, formikProps]);

  const handleFileChange = e => {
    formikProps.setFieldValue('avatar', e.currentTarget.files[0]);
    setPreview(URL.createObjectURL(e.currentTarget.files[0]));
    setShowConfirm(true);
  };
  return (
    <>
      {user && (
        <form onSubmit={formikProps.handleSubmit}>
          <StyledForm>
            <div>
              {!disabled ? (
                <UserPhoto src={preview} />
              ) : (
                <UserPhoto src={user.avatarURL} />
              )}

              {!disabled && !showConfirm && (
                <div style={{ marginTop: '15px' }}>
                  <FileInputLabel htmlFor="file">
                    <BsCamera />
                    Edit photo
                  </FileInputLabel>
                  <FileInput
                    type="file"
                    name="avatar"
                    id="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              )}
              {showConfirm && !disabled && (
                <div
                  style={{
                    marginTop: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <BsCheckLg
                    id="confirm"
                    style={{ fill: '#54ADFF', width: '24px', height: '24px' }}
                    onClick={handleClose}
                  />
                  <Text>Confirm</Text>
                  <BsX
                    id="cancel"
                    style={{ fill: '#F43F5E', width: '24px', height: '24px' }}
                    onClick={handleClose}
                  />
                </div>
              )}
            </div>
            <FieldsContainer>
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                name="name"
                value={formikProps.values.name}
                placeholder="Kate"
                disabled={disabled}
                onChange={formikProps.handleChange}
              />
              {formikProps.errors.name && errorsVisible && (
                <Error>{formikProps.errors.name}</Error>
              )}
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                name="email"
                value={formikProps.values.email}
                placeholder="Kate@mail.com"
                disabled={disabled}
                onChange={formikProps.handleChange}
              />
              {formikProps.errors.email && errorsVisible && (
                <Error>{formikProps.errors.email}</Error>
              )}
              <Label htmlFor="birthday">Birthday:</Label>
              <Input
                name="birthday"
                type="text"
                value={formikProps.values.birthday}
                placeholder="dd.mm.yyyy"
                disabled={disabled}
                onChange={formikProps.handleChange}
              />
              {formikProps.errors.birthday && errorsVisible && (
                <Error>{formikProps.errors.birthday}</Error>
              )}
              <Label htmlFor="phone">Phone:</Label>
              <Input
                type="tel"
                name="phone"
                value={formikProps.values.phone}
                placeholder="+380..."
                disabled={disabled}
                onChange={formikProps.handleChange}
              />
              {formikProps.errors.phone && errorsVisible && (
                <Error>{formikProps.errors.phone}</Error>
              )}
              <Label htmlFor="city">City:</Label>
              <Input
                type="text"
                name="city"
                value={formikProps.values.city}
                placeholder="Ternopil"
                disabled={disabled}
                onChange={formikProps.handleChange}
              />
              {formikProps.errors.city && errorsVisible && (
                <Error>{formikProps.errors.city}</Error>
              )}
              {!disabled && (
                <SubmitButton type="submit" disabled={showConfirm}>
                  Save
                </SubmitButton>
              )}
            </FieldsContainer>
          </StyledForm>
        </form>
      )}

      {/* {loading && <Loader />} */}
    </>
  );
};

export default UserForm;
