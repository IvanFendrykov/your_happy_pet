import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
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
  const [categoryData, setCategoryData] = useState('');
  const [ageData, setAgeData] = useState('');
  const [genderData, setGenderData] = useState('');
  const [notice, setNotice] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUnauthorizeModalOpen, setIsUnauthorizeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const IS_LOGGED_IN = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isHover, setIsHover] = useState(false);

  const showAddPetIcon = () => {
    setIsHover(true);
  };

  const hideAddPetIcon = () => {
    setIsHover(false);
  };

  const handleCategoriesData = (data) => {
    setCategoryData(data);
  };

  const handleAgeData = (data) => {
    setAgeData(data);
  };

  const handleGenderData = (data) => {
    setGenderData(data);
  };

  const handleSearchQuery = (data) => {
    setSearchQuery(data);
  };

  useEffect(() => {
    if (categoryData) {
      navigate(`/notices/${categoryData}`);
    } else {
      navigate(`/notices`);
    }
  }, [categoryData]);

  const calcYearDifference = (oldDateString) => {
    const oldDate = new Date(oldDateString);
    const newDate = new Date();
    const dateDifference = new Date(newDate - oldDate);
    const diffYears = dateDifference.getFullYear() - 1970;
    return diffYears;
  };

  const addPetAge = (items) => {
    const itemsWithAge = items.map((item) => {
      const petAge = calcYearDifference(item.birthDay);
      const petAgeString = `${petAge} year${!(petAge === 1) ? 's' : ''}`;
      return { ...item, age: petAgeString };
    });
    return itemsWithAge;
  };

  const onAddToFavourite = (noticeId) => {
    if (!IS_LOGGED_IN) {
      //МОДАЛКА ПРО ЗАЛОГИНИТСЯ
    }
    dispatch(setFavoriteNotice({ token, noticeId }));
  };

  const onDelete = async (id) => {
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

        if (categoryData !== 'own' && categoryData !== 'favorite') {
          const request = `${
            import.meta.env.VITE_BACKEND_BASE_URL
          }/api/notices?${categoryData && 'category=' + categoryData}${
            ageData && '&age=' + ageData
          }${genderData && '&gender=' + genderData}`;

          response = await axios.get(request);
          response = await response.data;
          response = await response.data;
          response = await response.docs;
        } else if (categoryData === 'favorite') {
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
        setSearchParams({
          category: categoryData || 'any',
          age: ageData || 'any',
          gender: genderData || 'any',
          search: 'search_by_nav_and_filters',
        });
        const petsDataWithAge = addPetAge(response);
        setPetsData(petsDataWithAge);
      } catch (error) {
        return null;
      }
      setIsLoaded(true);
    };
    getNotices();
  }, [categoryData, ageData, genderData]);

  const handleAddPetClick = () => {
    if (!IS_LOGGED_IN) {
      toggleUnauthorizeModal();
    } else {
      navigate('/add-pet');
    }
  };

  useEffect(() => {
    const getBySearch = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_BASE_URL
          }/api/notices/search/?search=${searchQuery}`,
        );

        setPetsData(response.data.docs);
      } catch (error) {
        return null;
      }
      setIsLoaded(true);
    };
    setSearchParams({
      category: categoryData || 'any',
      age: ageData || 'any',
      gender: genderData || 'any',
      search: searchQuery || 'default_notices',
    });
    getBySearch();
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
          category={categoryData}
        />
        <NoticePageContrtolsRight>
          <NoticesFilters
            onChangeAge={handleAgeData}
            onChangeGender={handleGenderData}
            age={ageData}
            gender={genderData}
          />
          <AddPetBtn type="button" onClick={handleAddPetClick}>
            <AddPetLink
              onMouseOver={showAddPetIcon}
              onMouseLeave={hideAddPetIcon}
            >
              Add pet
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <use
                  xlinkHref={`${icons}#plus-small${isHover ? '-white' : ''}`}
                />
              </svg>
            </AddPetLink>
          </AddPetBtn>
        </NoticePageContrtolsRight>
      </NoticePageContrtols>
      <Suspense fallback={<VortexLoader />}>
        <NoticesCategoriesList
          petsData={petsData}
          isLoggedIn={IS_LOGGED_IN}
          onAddToFavourite={onAddToFavourite}
          onDelete={onDelete}
          onLearnMore={onLearnMore}
        />
      </Suspense>
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
