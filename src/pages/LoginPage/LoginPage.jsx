import React from 'react';
import { jsxDEV as _jsxDEV } from 'react/jsx-dev-runtime';
import Login from '../../components/Login/Login';
import { LoginPageWrapper, LoginFormWrapper } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <Login />
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};

export default LoginPage;
