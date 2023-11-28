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
          <Label>Date of Birth:</Label> {pet.dateOfBirth}
        </PetInfo>
        <PetInfo>
          <Label>Type:</Label> {pet.type}
        </PetInfo>
        <PetInfo>
          <Label>Comments:</Label> {pet.comments}
        </PetInfo>
      </PetInfoWrapper>
    </PetContainer>
  );
}

export default PetsItem;
