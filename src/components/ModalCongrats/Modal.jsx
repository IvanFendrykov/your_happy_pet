import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
 import {ReactComponent as CrossIcon}  from '../../images/svg/cross-small.svg';
// import {ReactComponent as Crosssmal} from '../../images/icons/cross-smal.svg';
import { Backdrop, ModalWindow, BtnClose } from './Modal.styled';

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
        <Backdrop onClick={onModalOpen} inNoticePage={inNoticePage}>
          <ModalWindow>
            <BtnClose type="button" onClick={toggleModal}>
              <CrossIcon />
            </BtnClose>
            {children}
          </ModalWindow>
        </Backdrop>
      </>,
      ContainerModal
    );
  };
  
export default Modal;

