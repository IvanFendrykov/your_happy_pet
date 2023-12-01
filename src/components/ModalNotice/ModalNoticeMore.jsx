import { toast } from 'react-hot-toast';
import { CgClose } from 'react-icons/cg';
import { VscHeart } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
// import { selectAuth, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { selectAuth, selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import { setFavoriteNotice } from '../../redux/auth/operation';
// import { favoriteNotice } from 'redux/notices/noticesOperations';
// import { makeCategory } from '../NoticeCategoryItem/NoticeCategoryItem';
import  ModalUnauthorize from '../ModalUnauthorize/ModalUnauthorize';
import {
  Image,
  ImageContainer,
  ContainerInfo,
  Title,
  Type,
  List,
  Item,
  Comment,
  ContactLink,
  AddToFav,
  BtnContainer,
  Content,
  Backdrop,
  BtnClose,
} from './ModalNotice.styled';
import { useEffect, useState } from 'react';

export const ModalNoticeMore = ({ notice, onClose }) => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  const [isAuthorizedModalOpen, setIsAuthorizedModalOpen] = useState(false);
  const [isAddToFavModalOpen, setIsAddToFavModalOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const onClickFavBtn = () => {
    if (!auth.isLoggedIn) {
      toast.error('You need to sign in');
    } else {
      dispatch(
        setFavoriteNotice({
          noticeId: notice._id,
          token: auth.token
        })
      );
    }
  };

  const calcYearDifference = (oldDateString) => {
    const oldDate = new Date(oldDateString);
    const newDate = new Date();
    const dateDifference = new Date(newDate - oldDate);
    const diffYears = dateDifference.getFullYear() - 1970;
    return diffYears;
  };

  const toggleUnauthorizeModal = () => {
    setIsAuthorizedModalOpen((prevState) => !prevState);
  };

  const toggleAddToFavModal = () => {
    setIsAddToFavModalOpen((prevState) => !prevState);
  };

return (
    <>
      <Backdrop onClick={toggleAddToFavModal}>
        <Content>
          <BtnClose type="button" onClick={() => onClose()}>
            <CgClose size={22} color="#54ADFF" />
          </BtnClose>
          <ContainerInfo>
            <ImageContainer>
              <Image src={notice.image} alt="dog" />
              {/* <Type>{makeCategory(notice.typeOfnotice)}</Type>    СДЕЛАТЬ ТАЙП ПЕТА*/}
            </ImageContainer>
            <div style={{ width: '321px', padding: '0 12px' }}>
              <Title>{notice.title}</Title>
              <div style={{ display: 'flex', gap: '50px' }}>
                <List>
                  <Item>Name: </Item>
                  <Item>Age: </Item>
                  <Item>Breed: </Item>
                  {notice.price && <Item>Price: </Item>}
                  <Item>Place: </Item>
                  <Item>The sex: </Item>
                  <Item>Email: </Item>
                  <Item>Phone: </Item>
                </List>
                <List>
                  <Item>{notice.name}</Item>
                  <Item>{calcYearDifference(notice.birthDay)}</Item>
                  <Item>{notice.typeOfPet}</Item>
                  {notice.price && <Item> {notice.price}</Item>}
                  <Item>{notice.location}</Item>
                  <Item>{notice.gender}</Item>
                  <Item>
                    <a
                      style={{ color: '#FFC107', textDecoration: 'underline' }}
                      href={`mailto:${notice.email}`}
                    >
                      {notice.email}
                    </a>
                  </Item>
                  <Item style={{ color: '#FFC107', textDecoration: 'underline' }}>
                    <a
                      style={{ color: '#FFC107', textDecoration: 'underline' }}
                      href={`tel:${notice.phone}`}
                    >
                      {notice.phone}
                    </a>
                  </Item>
                </List>
              </div>
            </div>
                </ContainerInfo>
          <Comment>Commentaries: {notice.comments}</Comment>
          <BtnContainer>
                  <AddToFav
                  type="button"
                  onClick={() => {
                    onClickFavBtn(notice._id);
                    toggleUnauthorizeModal();
                  }}>
              <span>{auth.isFavorite ? 'Remove' : 'Add'}</span>
              <VscHeart size={20} />
            </AddToFav>
            <ContactLink href={`tel:${notice.phone}`}>Contact</ContactLink>
          </BtnContainer>
          {isAuthorizedModalOpen && !isLoggedIn && (
          <ModalUnauthorize toggleUnauthorizeModal={toggleUnauthorizeModal} />
          )}
        </Content>
      </Backdrop>
    </>
  );
};
