import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
  }
`;

export const EmailForm = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${({ error, secure }) => (error || secure ? '6px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error, secure }) => (error || secure ? '1px' : '24px')};
  }
`;

export const EmailInput = styled.input`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 256px;

  border: 1px solid ${({ theme, error, valid }) =>
    error ? '#F43F5E' : '#54ADFF'};
  border-radius: 40px;
  position: relative;

  &:hover,
  &:focus {
    border-color: ${({ theme, error, valid }) =>
      error ? '#F43F5E' : '#54ADFF'};
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
  }
`;

export const PasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom:60px;
  margin-bottom: ${({ error, secure }) => (error || secure ? '6px' : '8px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error, secure }) => (error || secure ? '1px' : '4px')};
  }
`;
export const IconContainerLeft = styled.span`
stroke:#00C3AD;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 52px;
    top: 50%;
    transform: translateY(-50%);
`;

export const IconDelete = styled.span`
position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  top: 50%;
  right: 19px;
  stroke:#F43F5E;
  transform: translateY(-50%);
`;

export const IconContainerRight = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
    right: 4px;
    top: 50%;
  transform: translateY(-50%);
  position: absolute;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  margin-bottom: ${({ error }) => (error ? '60px' : '60px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '110px' : '110px')};
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
    right: 2px;
    top: 50%;
  transform: translateY(-50%);

`;

export const PasswordInput = styled.input`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 256px;
  border: 1px solid ${({ theme, error, valid }) =>
    error ? '#F43F5E' : valid ? '#00C3AD' : '#54ADFF'};
  border-radius: 40px;

  &:hover,
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
  }
`;


export const Correct = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  stroke: ${({ showPassword }) => (showPassword ? '#888888' : '#54ADFF')};

  svg {
    display: ${({ showPassword }) => (showPassword ? 'none' : 'block')};
  }
`;

export const EyeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
right: 15px;
    top: 50%;
  transform: translateY(-50%);
  color: ${({ showPassword }) => (showPassword ? '#888888' : '#54ADFF')};
`;



export const IconError = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 767px) {
    right: 25px; 
  }
`;

export const IconErrors = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 767px) {
    right: 25px; 
  }
`;

export const MessageError = styled.p`
  margin: 8px;
  margin-top: 0;
  padding-left: 16px;
  font-size: smaller;
  color: ${({ theme }) => theme.colors.red};

  @media screen and (max-width: 767px) {
    font-size: xx-small;
  }
`;

export const LoginErrMessage = styled.p`
  font-size: smaller;margin:0 auto;
color:#888888;
  @media screen and (max-width: 767px) {
    font-size: xx-small;
  }
`;


export const InfoMessage = styled.p`
  margin: 8px;
  margin-top: 0;
  padding-left: 21px;
  font-size: smaller;
  color: ${({ theme }) => theme.colors.green};

  @media screen and (max-width: 767px) {
    font-size: xx-small;

  }
`;


export const LoginBtn = styled.button`
  margin-top: 8px;
  width: 256px;
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 40px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #ffffff;
  transition: background-color 0.4s;

  @media screen and (min-width: 768px) {
    width: 458px;
  }

  &:hover{
  background: rgb(23 107 182);
  }
  
  @media screen and (min-width: 1024px) {
    width: 458px;
  }
`;


export const RegTitle = styled.p`
 margin-top: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.grey};
    @media screen and (max-width: 768px) {
      margin-top: 8px;
    }
 
`;

export const RegLink = styled(Link)`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.blue};
  display: inline;
  cursor: pointer;
`;