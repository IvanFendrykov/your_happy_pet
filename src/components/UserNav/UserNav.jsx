import React from 'react';
import { User, Container, LogoutBtn, StyledLink } from './UserNav.styled';
import icon from '../../assets/images/user/user.png';
import { CiLogout } from 'react-icons/ci';
import useModal from '../../hooks/useModal';
import Backdrop from '../../components/Backdrop/Backdrop';
import ModalApproveAction from '../../components/ModalApproveAction/ModalApproveAction';
import { useAuth } from '../../hooks/useAuth';

const UserNav = () => {
  const { user } = useAuth();
  const { toggleModal, showModal } = useModal(false);

  return (
    <Container>
      <LogoutBtn onClick={() => toggleModal()}>
        Log Out
        <CiLogout />
      </LogoutBtn>
      {user && (
        <StyledLink to="/user">
          <img src={icon} alt="icon" />
          <User>{user}</User>
        </StyledLink>
      )}
      {showModal && (
        <Backdrop closeModal={toggleModal}>
          <ModalApproveAction closeModal={toggleModal} />
        </Backdrop>
      )}
    </Container>
  );
};

export default UserNav;
