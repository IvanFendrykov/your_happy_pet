import {
  DeleteButton,
  Label,
  PetContainer,
  PetImage,
  PetInfo,
  PetInfoWrapper,
} from './PetsItem.styled';
import { ReactComponent as Trash } from '../../images/svg/trash.svg';

function PetsItem({ pet, onDelete }) {
  const birthDate = new Date(pet.birthDay);
  const formattedBday = birthDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  return (
    <PetContainer>
      <DeleteButton onClick={() => onDelete(pet._id)}>
        <Trash style={{ stroke: '#54ADFF' }} />
      </DeleteButton>
      <PetImage src={pet.image} alt={pet.name} />
      <PetInfoWrapper>
        <PetInfo>
          <Label>Name:</Label> {pet.name}
        </PetInfo>
        <PetInfo>
          <Label>Date of Birth:</Label> {formattedBday}
        </PetInfo>
        <PetInfo>
          <Label>Type:</Label> {pet.typeOfPet}
        </PetInfo>
        <PetInfo>
          <Label>Comments:</Label> {pet.comments}
        </PetInfo>
      </PetInfoWrapper>
    </PetContainer>
  );
}

export default PetsItem;
