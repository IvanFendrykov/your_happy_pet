import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegistrationForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegistrationTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`;

export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '6px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '1px' : '24px')};
  }
`;

export const UsernameInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blue)};
  border-radius: 40px;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '6px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '1px' : '24px')};
  }
`;

export const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blue)};
  border-radius: 40px;
`;

export const RegistrationFormInput = styled(Field)`
  padding: 12px 0;
  line-height: 1.5;
  letter-spacing: 0.04em;

  width: 100%;
  height: 48px;
  border: none;
  outline: none;
`;

export const IconError = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({ theme }) => theme.colors.red};
  }
`;

export const MessageError = styled.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red};
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error, secure }) => (error || secure ? '6px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error, secure }) => (error || secure ? '1px' : '24px')};
  }
`;

export const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error, secure }) =>
      error
        ? theme.colors.red
        : secure
        ? theme.colors.green
        : theme.colors.blue};
  border-radius: 40px;
`;

export const IconPassword = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;  
flex-direction: row-reverse;
`;

export const EyeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DisabledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

`;
export const CheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  & svg {
    stroke: ${({ theme }) => theme.colors.green};
  }
`;

export const InfoMessage = styled.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.green};
`;

export const RegistrationErrorMessage = styled.div`
  padding: 15px 16px 0 16px;
  color: ${({ theme }) => theme.colors.red};
`;

export const RegistrationBtn = styled.button`
  margin-top: 8px;
  margin-bottom: 20px;
  width: 100%;

  padding: 10px 0 10px 0;

  background: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: #ffffff;
  transition: background-color 0.4s;
  &:hover{
  background: rgb(23 107 182);
  }
  
  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
`;

export const LoginTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const LoginLink = styled(Link)`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.blue};
  display: inline;
  cursor: pointer;
`;
