import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import ModalUnauthorize from '../../components/ModalUnauthorize/ModalUnauthorize';
import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import icons from '../../images/symbol-defs.svg';
import {
  Header,
  NoticePageContrtols,
  NoticePageContrtolsRight,
  AddPetLink,
  AddPetBtn,
} from './NoticesPage.styled';
import { ModalNoticeMore } from '../../components/ModalNotice/ModalNoticeMore';
import { useDispatch, useSelector } from 'react-redux';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import axios from 'axios';
import VortexLoader from '../../components/VortexLoader/VortexLoader';
import { setFavoriteNotice } from '../../redux/auth/operation';

const NoticesPage = () => {
  const [petsData, setPetsData] = useState([]);
  const navigate = useNavigate();
  const [categoriesData, setCategoriesData] = useState('');
  const [filtersData, setFiltersData] = useState({
    age: 'any age',
    gender: '',
  });

  const [notice, setNotice] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUnauthorizeModalOpen, setIsUnauthorizeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const IS_LOGGED_IN = useSelector((state) => state.auth.isLoggedIn);

  const handleCategoriesData = (data) => {
    setCategoriesData(data);
  };
  const handleFiltersData = (data) => {
    setFiltersData(data);
  };
  const handleSearchQuery = (data) => {
    setSearchQuery(data);
  };

  const onAddToFavourite = (noticeId) => {
    console.log(noticeId);
    if (!IS_LOGGED_IN) {
      //МОДАЛКА ПРО ЗАЛОГИНИТСЯ
    }
    dispatch(setFavoriteNotice({ token, noticeId }));
  };

  const onDelete = async (id) => {
    console.log('onDeleteFromFavourite' + id);
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/notices/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 200) {
        setPetsData((prevPets) =>
          prevPets.filter((notice) => notice._id !== id),
        );
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  };

  const onLearnMore = (id) => {
    setNotice(petsData.find((pet) => pet._id === id));
  };

  const onClose = () => {
    setNotice(null);
  };

  useEffect(() => {
    const getNotices = async () => {
      try {
        let response;

        if (categoriesData !== 'own' && categoriesData !== 'favorite') {
          response = await axios.get(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/notices?${
              categoriesData && 'category=' + categoriesData
            }`,
          );
          response = await response.data;
          response = await response.data;
          response = await response.docs;
        } else if (categoriesData === 'favorite') {
          response = await axios.get(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/notices/favorite`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          response = await response.data;
          response = await response.data;
          response = await response.favoriteNoties;
        } else {
          response = await axios.get(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/notices/my/adds`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          response = await response.data;
          response = await response.data;
          response = await response.docs;
        }

        setPetsData(response);
        console.log(response);
      } catch (error) {
        return null;
      }
      setIsLoaded(true);
    };
    getNotices();
  }, [categoriesData, filtersData]);

  const handleAddPetClick = () => {
    if (!IS_LOGGED_IN) {
      toggleUnauthorizeModal();
    } else {
      navigate('/add-pet');
    }
  };

  useEffect(() => {
    const getNotices = async () => {
      try {
        let response;

        response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_BASE_URL
          }..../api/notices/search/?search=${searchQuery}`,
        );
        response = await response.data;
        response = await response.data;
        response = await response.docs;

        setPetsData(response);
        console.log(response);
      } catch (error) {
        return null;
      }
      setIsLoaded(true);
    };
    getNotices();
  }, [searchQuery]);

  const toggleUnauthorizeModal = () => {
    setIsUnauthorizeModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Header>Find your favorite pet</Header>
      <NoticesSearch onSubmit={handleSearchQuery} />
      <NoticePageContrtols>
        <NoticesCategoriesNav
          isLoggedIn={IS_LOGGED_IN}
          onChange={handleCategoriesData}
        />
        <NoticePageContrtolsRight>
          <NoticesFilters onChange={handleFiltersData} />
          <AddPetBtn type="button" onClick={handleAddPetClick}>
            <AddPetLink>
              Add pet
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <use xlinkHref={`${icons}#plus-small-white`} />
              </svg>
            </AddPetLink>
          </AddPetBtn>
        </NoticePageContrtolsRight>
      </NoticePageContrtols>
      There must be Notice List
      <NoticesCategoriesList
        petsData={petsData}
        isLoggedIn={IS_LOGGED_IN}
        onAddToFavourite={onAddToFavourite}
        onDelete={onDelete}
        onLearnMore={onLearnMore}
      />
      There must be Notice List
      {isUnauthorizeModalOpen && !IS_LOGGED_IN && (
        <ModalUnauthorize toggleUnauthorizeModal={toggleUnauthorizeModal} />
      )}
      {notice && <ModalNoticeMore notice={notice} onClose={onClose} />}
    </div>
  );
};
/*

          <NoticesCategoriesList
        petsData={petsData}
        isLoggedIn={IS_LOGGED_IN}
        onAddToFavourite={onAddToFavourite}
        onDelete={onDelete}
        onLearnMore={onLearnMore}
      />  


*/
export default NoticesPage;
