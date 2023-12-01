//import { ModalNotice } from '../../components/ModalNotice/ModalNotice';
//import { ModalNoticeMore } from '../../components/ModalNotice/ModalNoticeMore';
//import { ModalNoticeRemove } from '../../components/ModalNotice/ModalNoticeRemove';
//import { Link } from 'react-router-dom';
import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import  ModalUnauthorize from '../../components/ModalUnauthorize/ModalUnauthorize';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
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
import axios from 'axios';
import VortexLoader from '../../components/VortexLoader/VortexLoader';
import { setFavoriteNotice } from '../../redux/auth/operation';


const NoticesPage = () => {
  const [petsData, setPetsData] = useState(null);
  const navigate = useNavigate();
  const [categoriesData, setCategoriesData] = useState('');
  const [filtersData, setFiltersData] = useState({
    age: 'any age',
    gender: '',
  });
  
  const [editedPetsData, setEditedPetsData] = useState(['']);
  const [notice, setNotice] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isUnauthorizeModalOpen, setIsUnauthorizeModalOpen] = useState(false);
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token);
  const IS_LOGGED_IN = useSelector((state) => state.auth.isLoggedIn);
  const handleCategoriesData = (data) => {
    setCategoriesData(data);
  };
  const handleFiltersData = (data) => {
    setFiltersData(data);
  };

  const calcYearDifference = (oldDateString) => {
    const oldDate = new Date(oldDateString);
    const newDate = new Date();
    const dateDifference = new Date(newDate - oldDate);
    const diffYears = dateDifference.getFullYear() - 1970;
    return diffYears;
  };

  const isAgeCategory = (item, ageCategory) => {
    const age = calcYearDifference(item.petBirthday);
    const ageFilterOptions = {
      upToOne: age < 1,
      upToTwo: age < 2,
      fromTwo: age >= 2,
      anyAge: true,
    };
    return ageFilterOptions[ageCategory];
  };

  const onAddToFavourite = (noticeId) => {
    console.log(noticeId)
    if (!IS_LOGGED_IN) {
      //МОДАЛКА ПРО ЗАЛОГИНИТСЯ
    }
    dispatch(setFavoriteNotice({ token, noticeId }))
  };
  const onDelete = async (id) => {
    console.log('onDeleteFromFavourite' + id);
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/notices/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },);
      if (response.status === 200) {
        setPetsData((prevPets) => prevPets.filter((notice) => notice._id !== id));
      }

    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }

  };
  const onLearnMore = (id) => {
    setNotice(petsData.find(pet => pet._id === id));
  };
  const onClose = () => {
    setNotice(null)
  }

  useEffect(() => {
    const getNotices = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/notices`);
        setPetsData(response.data.data.docs);
      } catch (error) {
        console.error("Error fetching user:", error);
        setIsLoaded(true)
        return null;
      }
    };

    getNotices();

  }, []);

  useEffect(() => {
    if (petsData) {
      const newEditedPetsData = petsData.filter(
        (pet) =>
          (!categoriesData || pet.category === categoriesData) &&
          isAgeCategory(pet, filtersData.age) &&
          (!filtersData.gender || pet.sex === filtersData.gender),
      );
      const newEditedPetsDataWithAge = newEditedPetsData.map((item) => {
        const petAge = calcYearDifference(item.birthDay);
        const petAgeString = `${petAge} year${!(petAge === 1) ? 's' : ''}`;
        return { ...item, age: petAgeString };
      });
      setEditedPetsData(newEditedPetsDataWithAge);
      setIsLoaded(true)
    }

  }, [petsData, categoriesData, filtersData]);

  if (!isLoaded) {
    return <VortexLoader />
  }

  const handleAddPetClick = () => {
    if (!IS_LOGGED_IN) {
      toggleUnauthorizeModal();
    } else {
       navigate('/add-pet');
    }
  };

  const toggleUnauthorizeModal = () => {
    setIsUnauthorizeModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Header>Find your favorite pet</Header>
      <NoticesSearch />
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
      <NoticesCategoriesList
        petsData={editedPetsData}
        isLoggedIn={IS_LOGGED_IN}
      onAddToFavourite={onAddToFavourite}
      onDelete={onDelete}
      onLearnMore={onLearnMore}
    />
      {isUnauthorizeModalOpen && !IS_LOGGED_IN && (
      <ModalUnauthorize toggleUnauthorizeModal={toggleUnauthorizeModal} />
    )}
    {notice && <ModalNoticeMore notice={notice} onClose={onClose} />}
  </div>
);

};
/*

      


*/
export default NoticesPage;
