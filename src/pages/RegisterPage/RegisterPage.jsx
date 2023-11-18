import UserRegisterForm from "../../components/Register/Register";
import { RegistrationPageWrapper, RegistrationFormWrapper } from "./RegisterPage.styled";

const RegisterPage = () => {
    return (
      <RegistrationPageWrapper>
        <RegistrationFormWrapper>
               <UserRegisterForm />
        </RegistrationFormWrapper>
      </RegistrationPageWrapper>
    );
  };
  
  export default RegisterPage;
  