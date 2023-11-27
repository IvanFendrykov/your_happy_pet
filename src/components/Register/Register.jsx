import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { ReactComponent as OpenEye } from '../../images/icons/eye-open.svg';
import { ReactComponent as CloseEye } from '../../images/icons/eye-closed.svg';
import { ReactComponent as Checkgood} from '../../images/icons/check-good.svg';
import {ReactComponent as Crosssmal} from '../../images/icons/cross-smal.svg';

import {register} from '../../redux/auth/operation';

import { toast } from 'react-hot-toast';


import {
 RegistrationForm,
 RegistrationTitle,
 UsernameContainer,
 UsernameInputContainer,
 EmailContainer,
 EmailInputContainer,
 RegistrationFormInput,
 IconError,
 MessageError,
 PasswordContainer,
 PasswordInputContainer,
 IconPassword,
  EyeIcon,
 DisabledIcon,
 CheckIcon,
 InfoMessage,
 RegistrationErrorMessage,
 RegistrationBtn,
 LoginTitle,
 LoginLink,
} from './Register.styled';

const initialValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const ValidationInput = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'This field is required';
    } else if (/^\s+$/.test(values.username)) {
      errors.username = 'Username cannot be empty';
    }
  
    if (!values.email) {
      errors.email = 'This field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Enter a valid Email';
      toast.error('Email must contain the "@" symbol')
    }
  
    if (!values.password) {
      errors.password = 'This field is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
  
    if (!values.confirmPassword) {
      errors.confirmPassword = 'This field is required';
    } else if (values.confirmPassword.length < 8) {
      errors.confirmPassword = 'Password must be at least 8 characters long';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      toast.error('Please, enter correct password')
    }
  
    return errors;
  };


  const UserRegisterForm = () => {
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [availableEmail, setAvailableEmail] = useState(true);
  
    const navigate = useNavigate();
  
    const toggleVisiblePassword = () => {
      setShowPassword(prevState => !prevState);
    };
  
    const toggleVisibleConfirmPassword = () => {
      setShowConfirmPassword(prevState => !prevState);
    };
  
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      
      if (loading) {
        return;
      }

      setLoading(true);
      const credentials = {
        email: values.email,
        password: values.password,
        username: values.username,
      };


      try {
        const response = dispatch(register(credentials));
         if (response.error) {
            setAvailableEmail(false);
       } else {
          setAvailableEmail(true);
          navigate('/user');
        }
      } catch (error) {
        console.error(error);
      } finally { 
        setLoading(false);
        setSubmitting(false);
        
      }
    };

    return (
        <Formik
        initialValues={initialValue}
        validate={ValidationInput}
        validateOnChange={false}
        onSubmit={handleSubmit}
    >
       {({
        values,
        errors,
        setErrors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => {
        const isPasswordValid = values.password && values.password.length >= 8;
        const handleFieldChange = e => {
        const { name } = e.target;
        setErrors({ ...errors, [name]: '' });
        handleChange(e);
      };
      return (
        <RegistrationForm onSubmit={handleSubmit}>
          <RegistrationTitle>Registration</RegistrationTitle>
          <UsernameContainer
            valider={errors.username && touched.username}
          >
            <UsernameInputContainer
              valider={errors.username && touched.username}
              style={{
                borderColor:
                  errors.username && touched.username ? '#F43F5E' : '#54ADFF',
              }}
            >
              <RegistrationFormInput
                type="string"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleFieldChange}
                onBlur={handleBlur}
                // disabled={loading}
              />
              {errors.username && touched.username && values.username && (
                <IconError
                  onClick={() => {
                    resetForm({ values: { ...values, username: '' } });
                  }}
                >
                </IconError>
              )}
            </UsernameInputContainer>
            {errors.username && touched.username && (
              <MessageError name="username">{errors.username}</MessageError>
            )}
          </UsernameContainer>

          <EmailContainer error={errors.email && touched.email}>
            <EmailInputContainer
              valider={errors.email && touched.email}
              style={{
                borderColor:
                  errors.email && touched.email ? '#F43F5E' : '#54ADFF',
              }}
            >
              <RegistrationFormInput
                type="string"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleFieldChange}
                onBlur={handleBlur}
                // disabled={loading}
              />
              {errors.email && touched.email && values.email && (
                <IconError
                  onClick={() => {
                    resetForm({ values: { ...values, email: '' } });
                  }}
                >
                   <Crosssmal />
                </IconError>
              )}
            </EmailInputContainer>

            {errors.email && touched.email && (
              <MessageError name="email">{errors.email}</MessageError>
            )}
          </EmailContainer>

          <PasswordContainer
            valider={errors.password && touched.password}
            // secure={isPasswordValid}
          >
            <PasswordInputContainer
               valider={errors.password && touched.password}
              // secure={isPasswordValid}
              style={{
                borderColor:
                  errors.password && touched.password
                    ? '#F43F5E'
                    :  isPasswordValid
                    ? '#00C3AD'
                    : '#54ADFF',
              }}
            >
              <RegistrationFormInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleFieldChange}
                onBlur={handleBlur}
                // disabled={loading}
              />
              <IconPassword>
                <EyeIcon
                  onClick={toggleVisiblePassword}
                  valider={errors.password && touched.password}
                  // secure={isPasswordValid}
                  style={{ stroke: showPassword ? '#54ADFF' : '#888' }}
                >
                  {showPassword ? <OpenEye /> : <CloseEye />}
                </EyeIcon>
                {isPasswordValid && (
                  <CheckIcon>
                    <Checkgood/>
                  </CheckIcon>
                )}
                {errors.password && touched.password && values.password && (
                  <IconError
                    onClick={() => {
                      resetForm({ values: { ...values, password: '' } });
                    }}
                  >
                    <Crosssmal />
                  </IconError>
                )}
              </IconPassword>
            </PasswordInputContainer>

            {errors.password && touched.password && (
              <MessageError>{errors.password}</MessageError>
            )}
            {isPasswordValid && (
              //  <InfoMessage valid={isPasswordValid}>
                // Password is secure
              // </InfoMessage>
              <InfoMessage>Password is secure</InfoMessage>
            )}
          </PasswordContainer>

          <PasswordContainer
             valider={errors.confirmPassword && touched.confirmPassword}
          >
            <PasswordInputContainer
              valider={errors.confirmPassword && touched.confirmPassword}
              style={{
                borderColor:
                  errors.confirmPassword && touched.confirmPassword
                    ? '#F43F5E'
                    : '#54ADFF',
              }}
            >
              <RegistrationFormInput
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleFieldChange}
                onBlur={handleBlur}
                // disabled={loading}
              />
              <IconPassword>
                <DisabledIcon
                  onClick={toggleVisibleConfirmPassword}
                  valider={errors.confirmPassword && touched.confirmPassword}
                  style={{ stroke: showConfirmPassword ? '#54ADFF' : '#888' }}
                >
                  {showConfirmPassword ? <OpenEye /> : <CloseEye />}
                </DisabledIcon>
                {errors.confirmPassword && touched.confirmPassword && values.confirmPassword && (
                    <IconError
                      onClick={() => {
                        resetForm({
                          values: { ...values, confirmPassword: '' },
                        });
                      }}
                    >
                      <Crosssmal />
                    </IconError>
                  )}
              </IconPassword>
            </PasswordInputContainer>

             {errors.confirmPassword && touched.confirmPassword && ( 
              <MessageError>{errors.confirmPassword}</MessageError>
            )}
          </PasswordContainer>

          {!availableEmail && (
             <RegistrationErrorMessage>
               This email is already in use. Please, try with another email or
               log in!
             </RegistrationErrorMessage>
          )}
          
          <RegistrationBtn type="submit" disabled={isSubmitting}>
            Registration
          </RegistrationBtn>
          <LoginTitle>
            Already have an account?{' '}
            <LoginLink to={'/login'}>Log In</LoginLink>
          </LoginTitle>
        </RegistrationForm>
      );
    }}
    </Formik>
    );
};

export default UserRegisterForm;