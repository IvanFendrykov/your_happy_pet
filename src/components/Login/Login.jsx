import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Formik } from 'formik';
import {
  LoginForm,
  LoginTitle,
  EmailContainer,
  EmailForm,
  EmailInput,
  PasswordForm,
  PasswordContainer,
  PasswordInput,
  MessageError,
  LoginErrMessage,
  LoginBtn,
  RegLink,
  EyeIcon,
  IconError,
  InfoMessage,
  RegTitle,
  IconPassword,
} from './Login.styled';

import { ReactComponent as OpenEye } from '../../images/icons/eye-open.svg';
import { ReactComponent as CloseEye } from '../../images/icons/eye-closed.svg';


const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Enter a valid Email';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  return errors;
};

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [availableEmail] = useState(false);
  const [emailCheckDone, setEmailCheckDone] = useState(false);


  const toggleVisiblePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleFieldChange = (e, setValues, values) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (values, { setSubmitting, setValues }) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const credentials = {
        email: values.email,
        password: values.password,
      };

      await dispatch(login(credentials));
    } catch (error) {
      console.error('Error caught:', error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
        setValues,
      }) => (
        <LoginForm onSubmit={handleSubmit}>
          <LoginTitle>Login</LoginTitle>
          <EmailContainer error={errors.email && touched.email}>
            <EmailForm
              error={errors.email && touched.email}
              style={{
                borderColor: errors.email && touched.email ? '#F43F5E' : '#54ADFF',
              }}
            >
              <EmailInput
                type="string"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={(e) => handleFieldChange(e, setValues, values)}
                onBlur={handleBlur}
                error={errors.email && touched.email}
              />
              {errors.email && touched.email && values.email && (
                <IconError
                  onClick={() => {
                    resetForm({ values: { ...values, email: '' } });
                  }}
                >
                </IconError>
              )}
            </EmailForm>
            {errors.email && touched.email && (
              <MessageError name="email">{errors.email}</MessageError>
            )}
          </EmailContainer>

          <PasswordContainer error={errors.password && touched.password}>
            <PasswordForm>
              <PasswordInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={(e) => handleFieldChange(e, setValues, values)}
                onBlur={(e) => {
                  handleBlur(e);
                  setValues({ ...values, isPasswordValid: true });
                }}
                error={(errors.password && touched.password) ? 'true' : 'false'}
                valid={(!errors.password && touched.password && values.isPasswordValid) ? 'true' : 'false'}
                style={{
                  borderColor:
                    (errors.password && touched.password) ? '#F43F5E' :
                    ((!errors.password && touched.password && values.isPasswordValid) ? '#00C3AD' : '#54ADFF'),
                }}
              />
              <IconPassword>
                <EyeIcon
                  onClick={toggleVisiblePassword}
                  error={errors.password && touched.password}
                >
                  {showPassword ? <OpenEye /> : <CloseEye />}
                </EyeIcon>
              </IconPassword>
            </PasswordForm>

            {errors.password && touched.password && (
              <MessageError>{errors.password}</MessageError>
            )}
            {!errors.password && touched.password && values.password.length >= 8 && values.isPasswordValid && (
              <InfoMessage>Password is secure</InfoMessage>
            )}
          </PasswordContainer>

          {emailCheckDone && (
            <LoginErrMessage>
              This email address is not in use. Try registering an address!
            </LoginErrMessage>
          )}

          <LoginBtn type="submit" disabled={isSubmitting}>
            Login
          </LoginBtn>
          <RegTitle>
            Don't have an account? <RegLink to={'/register'}>Register</RegLink>
          </RegTitle>
        </LoginForm>
      )}
    </Formik>
  );
};

export default Login;
