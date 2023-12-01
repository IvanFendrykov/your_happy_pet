import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ReactComponent as CrossIcon } from '../../images/svg/cross-small.svg';
// import {ReactComponent as Crosssmal} from '../../images/icons/cross-smal.svg';
import { Backdrop, ModalWindow, BtnClose } from './Modal.styled';
import { SvgIcon } from '../../pages/UserPage/UserPage.styled';
import symbolDefs from '../../images/symbol-defs.svg';

const ContainerModal = document.getElementById('modal-root');

// const [isModalOpen, setIsModalOpen] = useState(false);

// const toggleModal = () => {
//   setIsModalOpen(prevState => !prevState);
// };

// {isModalOpen && (
//     <Modal toggleModal={toggleModal}>
//       {children}
//     </Modal>
//   )


const Modal = ({ toggleModal, children }) => {
  const location = useLocation();
  const inNoticePage = location.pathname.includes('notices');

  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleModal]);

  const onModalOpen = event => {
    if (event.target === event.currentTarget) {
      toggleModal(false);
    }
  };

  return createPortal(
    <>
      <Backdrop onClick={onModalOpen} inNoticePage={inNoticePage}>
        <ModalWindow>
          <BtnClose type="button" onClick={() => toggleModal(false)}>
            <SvgIcon width="24" height="24">
              <use href={symbolDefs + '#cross-small'} fill="white"></use>
            </SvgIcon>
          </BtnClose>
          {children}
        </ModalWindow>
      </Backdrop>
    </>,
    ContainerModal
  );
};

export default Modal;

