import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/operation.js';
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
  IconContainerRight,
  IconContainerLeft,
  MessageError,
  LoginBtn,
  RegLink,
  EyeIcon,
  InfoMessage,
  RegTitle,
  IconDelete,
} from './Login.styled';


import { ReactComponent as OpenEye } from '../../images/icons/eye-open.svg';
import { ReactComponent as CloseEye } from '../../images/icons/eye-closed.svg';
import { ReactComponent as Correct } from '../../images/icons/check-good.svg';
import { ReactComponent as IconError } from '../../images/icons/cross-smal.svg';

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
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

const toggleVisiblePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleFieldChange = (e, setValues, values) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

const handleSubmit = async (values, { setSubmitting }) => {
  try {
    const credentials = {
      email: values.email,
      password: values.password,
    };

    const response = await dispatch(login(credentials));

    if (response.status === 200) {

      // Navigate to '/userpage' upon successful login
      navigate('/user');

    }
  } catch (error) {
    console.error('Error caught:', error);
  } finally {
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
                style={{ color: '#888' }}
              />
              {/* Іконка  */}
              <IconDelete>
                {errors.email && touched.email && values.email && (
                <IconError
                  onClick={() => {
                    resetForm({ values: { ...values, email: '' } });
                  }}
                >
                </IconError>
               )}
              </IconDelete> 
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
                <IconContainerLeft>
                  {/* Іконка Correct */}
                  <Correct
                    data-ispasswordvalid={
                      !errors.password && touched.password && values.password.length >= 8 && values.isPasswordValid
                    }
                    style={{
                      stroke: !errors.password && touched.password && values.password.length >= 8 && values.isPasswordValid
                        ? '#00C3AD'
                        : '#888',
                      display: !errors.password && touched.password && values.password.length >= 8 && values.isPasswordValid
                        ? 'block'
                        : 'none',
                    }}
                  />
                </IconContainerLeft>
                <IconContainerRight>
                  {/* Іконка Eye */}
                  <EyeIcon
                    onClick={toggleVisiblePassword}
                    error={errors.password && touched.password}
                    style={{ stroke: showPassword ? '#54ADFF' : '#888' }}
                  >
                    {showPassword ? <OpenEye style={{ cursor: 'pointer' }} /> : <CloseEye style={{ cursor: 'pointer' }} />}
                  </EyeIcon>
                </IconContainerRight>
                          </PasswordForm>
            {errors.password && touched.password && (
              <MessageError>{errors.password}</MessageError>
            )}
            {!errors.password && touched.password && values.password.length >= 8 && values.isPasswordValid && (
              <InfoMessage>Password is secure</InfoMessage>
            )}
          </PasswordContainer>
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