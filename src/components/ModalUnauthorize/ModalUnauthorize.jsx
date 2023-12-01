import React from 'react';
import AuthNav from '../AuthNav/AuthNav';
import Modal from '../Modal/Modal';
import { ModalWrapper, ModalContent, ModalTitle, ModalDescription, NavContainer} from './ModalUnauthorize.styled';

const ModalUnauthorize = ({ toggleUnauthorizeModal }) => {
  return (
    <Modal toggleModal={toggleUnauthorizeModal}>
      <ModalWrapper>
        <ModalContent>
          <ModalTitle>Attention</ModalTitle>
          <ModalDescription>
            We would like to remind you that certain functionality is available only to authorized users.
            If you have an account, please log in with your credentials. If you do not already have an account,
            you must register to access these features.
          </ModalDescription>
          <NavContainer>
          <AuthNav/>
          </NavContainer>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
};

export default ModalUnauthorize;