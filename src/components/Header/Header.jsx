import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import React from 'react';
import { Container, User } from './Header.styled';
import icon from '../../assets/images/user/user.png';
import AuthNav from 'components/AuthNav/AuthNav';
import { useWindowSize } from '../../hooks/useResize';

import { Menu } from '../Menu/Menu';

const Header = ({ handleClick }) => {
  const size = useWindowSize();

  return (
    <Container>
      <Logo size={size} />
      {size[0] >= 768 && size[0] < 1200 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <AuthNav />
        </div>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '22px',
        }}
      >
        {/* {size[0] >= 768 && size[0] < 1200  && (
          <div>
            <User to="/user">
              <img src={icon} alt="icon" />
              {user && <p>{user.name}</p>}
            </User>
          </div>
        )} */}

        {size[0] < 1200 && <Menu size={size} />}
      </div>

      {size[0] >= 1200 && (
        <>
          <div style={{ display: 'flex', gap: '40px' }}>
            <Nav />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <AuthNav />
          </div>
        </>
      )}
    </Container>
  );
};

export default Header;
