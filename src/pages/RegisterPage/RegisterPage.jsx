import UserRegisterForm from "../../components/Register/Register";
import { RegistrationPageWrapper, RegistrationFormWrapper } from "./RegisterPage.styled";
import { selectIsLoading } from "../../redux/auth/auth-selectors";
import VortexLoader from "../../components/VortexLoader/VortexLoader";
import {useSelector} from 'react-redux';

const RegisterPage = () => {
  const isLoading = useSelector(selectIsLoading);
    return (
      <RegistrationPageWrapper>
        <RegistrationFormWrapper>
               { isLoading && <VortexLoader /> }
                <UserRegisterForm />
        </RegistrationFormWrapper>
      </RegistrationPageWrapper>
    );
  };
  
  export default RegisterPage;
  