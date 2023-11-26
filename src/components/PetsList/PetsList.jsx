import PetsItem from '../PetsItem/PetsItem';
import { NavLink } from 'react-router-dom';
function PetsList({ pets }) {
  return (
    <>
      <NavLink to="/add-pet">add pet</NavLink>
      {pets.map((pet) => (
        <PetsItem key={pet.id} pet={pet} />
      ))}
    </>
  );
}

export default PetsList;
