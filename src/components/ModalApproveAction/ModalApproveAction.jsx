import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

// import { logOut } from 'redux/auth/authOperations';

import {
  Section,
  Header,
  BtnCancel,
  BtnYes,
  LogoutIcon,
  BtnsWrapper,
} from './ModalApproveAction.styled';
import { logout } from '../../redux/auth/operation';


const ModalApproveAction = ({ closeModal }) => {

  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(token));
  };
  return (
    <Section>
      <Header>Already leaving?</Header>
      <BtnsWrapper>
        <BtnCancel type="button" onClick={closeModal}>
          Cancel
        </BtnCancel>
        <BtnYes to="/main" onClick={handleLogout}>
          Yes
          <LogoutIcon />
        </BtnYes>
      </BtnsWrapper>
    </Section>
  );
};

export default ModalApproveAction;
