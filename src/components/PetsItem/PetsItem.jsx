
import { DeleteButton, Label, PetContainer, PetImage, PetInfo, PetInfoWrapper } from './PetsItem.styled'

function PetsItem({ pet }) {
    const onDelete = (id) => {
        //do delete request by pet id to delete it from list
        console.log(pet);
    }
    return (
        <PetContainer >
            <DeleteButton onClick={() => onDelete(pet.id)}>Delete</DeleteButton>
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