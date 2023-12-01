import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ReactComponent as CrossIcon } from '../../images/icons/cross-smal.svg';
import { Backdrop, ModalWindow, BtnClose } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ toggleModal, children }) => {
  const location = useLocation();
  const inNoticePage = location.pathname.includes('notices');

  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleModal]);

  const onModalOpen = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <>
      <Backdrop onClick={onModalOpen}>
        <ModalWindow>
          <BtnClose type="button" onClick={toggleModal}>
            <CrossIcon size={22} color="#54ADFF" />
          </BtnClose>
          {children}
        </ModalWindow>
      </Backdrop>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
