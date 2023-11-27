import Logo from '../Logo/Logo';
import { LiaTimesSolid } from 'react-icons/lia';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  MenuBurger,
  Top,
  CloseBurger,
  MenuBackground,
  LogoutBtn,
  MenuNavBtnUser,
} from './Menu.styled';
import Nav from '../Nav/Nav';
import { useLocation } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';
import Backdrop from '../Backdrop/Backdrop';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import useModal from '../../hooks/useModal';
import { useCallback, useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';
import AuthNav from '../../components/AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

export const Menu = ({ size }) => {
  const { isLoggedIn, user } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  const { toggleModal, showModal } = useModal(false);

  let url = useLocation();

  const closeMenu = useCallback(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  useEffect(() => {
    closeMenu();
  }, [url, closeMenu]);

  return (
    <>
      <div>
        <MenuBurger type="button" onClick={() => setOpenMenu(true)}>
          <RxHamburgerMenu />
        </MenuBurger>
        {openMenu && (
          <MenuBackground>
            <Top>
              <Logo size={size} />
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
              >
                {size[0] >= 768 && isLoggedIn && (
                  <LogoutBtn onClick={() => toggleModal()}>
                    Log Out
                    <CiLogout />
                  </LogoutBtn>
                )}
                {size[0] >= 768 && !isLoggedIn && (
                  <MenuNavBtnUser>
                    <AuthNav />
                  </MenuNavBtnUser>
                )}
                <CloseBurger onClick={closeMenu}>
                  <LiaTimesSolid />
                </CloseBurger>
              </div>
            </Top>
            {size[0] < 768 ? (
              <MobileMenu
                isLoggedIn={isLoggedIn}
                user={user}
                toggleModal={toggleModal}
              />
            ) : (
              <Nav />
            )}

            {/* {size[0] >= 768 && <Nav />} */}
            {showModal && isLoggedIn && (
              <Backdrop closeModal={toggleModal}>
                <ModalApproveAction closeModal={toggleModal} />
              </Backdrop>
            )}
          </MenuBackground>
        )}
      </div>
    </>
  );
};
