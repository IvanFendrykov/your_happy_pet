import PetsItem from '../PetsItem/PetsItem';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../images/svg/plus.svg';
import zIndex from '@mui/material/styles/zIndex';


const StyledLink = styled(NavLink)`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
  filter: drop-shadow(3px 8px 14px rgba(136, 198, 253, 0.19));
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  position: absolute;
  right: 0;
  top: 70px;
  gap: 4px;
  z-index: 50;
  @media (min-width: 768px) {
    top: -60px;
    width: 130px;
    height: 40px;
    flex-direction: row;
    gap: 8px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.64px;
    border-radius: 40px;
    right: 24px;
    background-color: #54adff;
  }
  @media (min-width: 1280px) {
    right: 10px;
  }
`;

export const H2 = styled.h2`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;
  margin-bottom: 24px;
  width: 280px;
   @media (min-width: 768px) {
    width: 700px;
   }
`;



function PetsList({ pets, onDelete }) {
  return (
    <div style={{ position: 'relative', zIndex: 5 }}>
      <StyledLink to="/add-pet">
        <Plus style={{ stroke: '#fff' }} />
        <span>Add pet</span>
      </StyledLink>

      {pets && pets.length > 0 ? (
        pets.map((pet) => <PetsItem key={pet._id} pet={pet} onDelete={onDelete} />)
      ) : (
        <H2>You didnt added any pets!</H2>
      )}
    </div>
  );
}

export default PetsList;
