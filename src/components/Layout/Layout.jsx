import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { LayoutContainer } from './Layout.styled';
const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    document.querySelector('body').classList.toggle('scroll-none');
    setMenuActive(!menuActive);
  };

  return (
    <LayoutContainer>
      <Header handleClick={handleClick}></Header>
        <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
