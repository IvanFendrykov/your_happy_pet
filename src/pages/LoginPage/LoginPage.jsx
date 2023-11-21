import UserLoginForm from '../../components/Login/Login';
import { LoginPageWrapper, LoginFormWrapper } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <UserLoginForm />
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};

export default LoginPage;
