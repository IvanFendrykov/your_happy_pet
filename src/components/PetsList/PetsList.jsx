
import PetsItem from '../PetsItem/PetsItem';

function PetsList({ pets }) {

    return (
        <>
            <a href='/'>Add pet</a>
            {pets.map((pet) => (
                <PetsItem key={pet.id} pet={pet} />
            ))}
        </>
    );
}

export default PetsList;
