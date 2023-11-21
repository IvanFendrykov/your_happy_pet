import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import AuthNav from '../../components/AuthNav/AuthNav';
import icon from '../../assets/images/user/user.png';
import {
  NavContainer,
  MenuNavBtn,
  Middle,
  User,
  LogoutBtn,
} from './Menu.styled';
import { CiLogout } from 'react-icons/ci';
import { isLoggedIn } from '../Header/Header';
import {user} from '../Header/Header'

export const MobileMenu = ({   toggleModal }) => {
  
  return (
    <>
      <Middle>
        {isLoggedIn ? (
          <MenuNavBtn user="true">
            <Link to="/user">
              <img src={icon} alt="icon" />
            </Link>
            <User>{user.name}</User>
          </MenuNavBtn>
        ) : (
          <MenuNavBtn>
            <AuthNav />
          </MenuNavBtn>
        )}
        <NavContainer>
          <Nav />
        </NavContainer>
      </Middle>
      {isLoggedIn && (
        <LogoutBtn onClick={() => toggleModal()}>
          Log Out
          <CiLogout />
        </LogoutBtn>
      )}
    </>
  );
};
