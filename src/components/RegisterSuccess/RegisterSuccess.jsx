import { ReactComponent as Pawprint } from '../../images/svg/pawprint1.svg';
import { Section, Header, Button, Text } from './RegisterSuccess.styled';


const RegisterSuccess = ({ toggleModal }) => {

  return (
    <Section>
      <Header style={{ margin: 0 }}>Congrats!</Header>
      <Text>Your registration is success!</Text>
      <Button
        type="submit"
        text="Go to profile"
        filled
        onClick={() => toggleModal(false)}
        icon={<Pawprint />}
      >Go to profile</Button>
    </Section>
  );
};

export default RegisterSuccess;

