import PetsItem from '../PetsItem/PetsItem';

function PetsList({ pets }) {

    return (
        <>
            {pets.map((pet) => (
                <PetsItem key={pet.id} pet={pet} />
            ))}
        </>
    );
}

export default PetsList;
