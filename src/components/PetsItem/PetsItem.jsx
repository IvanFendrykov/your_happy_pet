
import { DeleteButton, Label, PetContainer, PetImage, PetInfo, PetInfoWrapper } from './PetsItem.styled'

function PetsItem({ pet }) {
    return (
        <PetContainer >
            <DeleteButton>Delete</DeleteButton>
            <PetImage src={pet.imageUrl} alt={pet.name} />
            <PetInfoWrapper>
                <PetInfo><Label>Name:</Label> {pet.name}</PetInfo>
                <PetInfo><Label>Date of Birth:</Label> {pet.dateOfBirth}</PetInfo>
                <PetInfo><Label>Type:</Label> {pet.type}</PetInfo>
                <PetInfo><Label>Comments:</Label> {pet.comments}</PetInfo>
            </PetInfoWrapper>
        </PetContainer>
    )
}

export default PetsItem