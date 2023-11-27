/*import { ModalNotice } from '../../components/ModalNotice/ModalNotice';
import { ModalNoticeMore } from '../../components/ModalNotice/ModalNoticeMore';
import { ModalNoticeRemove } from '../../components/ModalNotice/ModalNoticeRemove';
import { Link } from 'react-router-dom';
import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';*/
import { useEffect, useState } from 'react';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';

const PETS_DATA = [
  {
    _id: 'pet-01',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute dog looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2022-07-09',
    sex: 'female',
    name: 'Dog',
    breed: 'friendly',
    price: '0$',
    favourite: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'in good hands',
  },
  {
    _id: 'pet-02',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute cat looking for a home',
    location: 'Lviv',
    petBirthday: '2013-04-29',
    sex: 'female',
    name: 'Cat',
    breed: 'lazy',
    price: '50$',
    favourite: false,
    description: 'Morbi a ipsum scelerisque, dapibus arcu et, faucibus nulla',
    category: 'lost/found',
  },
  {
    _id: 'pet-03',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute mouse looking for a home',
    location: 'Khmelnytskyi',
    petBirthday: '2015-03-13',
    sex: 'female',
    name: 'Mouse',
    breed: 'sneaky',
    price: '100$',
    favourite: true,
    description: 'Etiam vitae ex at purus interdum congue',
    category: 'favorite ads',
  },
  {
    _id: 'pet-04',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute frog looking for a home',
    location: 'Lviv',
    petBirthday: '2019-06-06',
    sex: 'female',
    name: 'Frog',
    breed: 'clumsy',
    price: '0$',
    favourite: false,
    description: 'Quisque dignissim augue sed imperdiet consectetur',
    category: 'my ads',
  },
  {
    _id: 'pet-05',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute bat looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2023-02-24',
    sex: 'male',
    name: 'Bat',
    breed: 'scary',
    price: '50$',
    favourite: false,
    description: 'Vivamus dapibus sed felis in faucibus.',
    category: 'sell',
  },
  {
    _id: 'pet-06',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute elephant looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2023-03-02',
    sex: 'female',
    name: 'Elephant',
    breed: 'big',
    price: '100$',
    favourite: true,
    description: 'Mauris congue metus eget libero ornare suscipit.',
    category: 'in good hands',
  },
  {
    _id: 'pet-07',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute lion looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2022-04-18',
    sex: 'female',
    name: 'Lion',
    breed: 'brave',
    price: '0$',
    favourite: true,
    description: 'Donec finibus rhoncus mauris porta euismod.',
    category: 'lost/found',
  },
  {
    _id: 'pet-08',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute fox looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2016-09-01',
    sex: 'male',
    name: 'Fox',
    breed: 'cunning',
    price: '50$',
    favourite: false,
    description: 'Fusce faucibus aliquet nunc, ut faucibus augue laoreet in.',
    category: 'my ads',
  },
  {
    _id: 'pet-09',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute blue whale looking for a home',
    location: 'Chernivtsi',
    petBirthday: '2023-08-06',
    sex: 'female',
    name: 'Blue Whale',
    breed: 'giant',
    price: '100$',
    favourite: true,
    description: 'Phasellus in dui feugiat, pharetra dolor at, rutrum tortor.',
    category: 'in good hands',
  },
  {
    _id: 'pet-10',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute rabbit looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2022-11-10',
    sex: 'male',
    name: 'Rabbit',
    breed: 'fast',
    price: '0$',
    favourite: false,
    description:
      'Pellentesque quis lectus feugiat, luctus purus ut, semper diam. Integer sagittis mattis dui.',
    category: 'favorite ads',
  },
  {
    _id: 'pet-11',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute hedgehog looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2023-01-30',
    sex: 'female',
    name: 'Hedgehog',
    breed: 'spiky',
    price: '50$',
    favourite: false,
    description:
      'Fusce nec ornare lectus. Morbi id lorem cursus, congue ligula eget, imperdiet metus.',
    category: 'in good hands',
  },
  {
    _id: 'pet-12',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute fish looking for a home',
    location: 'Zaporizhzhia',
    petBirthday: '2020-12-16',
    sex: 'male',
    name: 'Fish',
    breed: 'floatable',
    price: '100$',
    favourite: true,
    description: 'Phasellus fermentum sed ligula sed porta.',
    category: 'lost/found',
  },
];

const IS_LOGGED_IN = true;

const NoticesPage = () => {
  const [petsData, setPetsData] = useState(PETS_DATA);
  const [categoriesData, setCategoriesData] = useState('');
  const [filtersData, setFiltersData] = useState({
    age: 'any age',
    gender: '',
  });
  const [editedPetsData, setEditedPetsData] = useState(PETS_DATA);

  const handleCategoriesData = data => {
    setCategoriesData(data);
  };
  const handleFiltersData = data => {
    setFiltersData(data);
  };

  const calcYearDifference = oldDateString => {
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

  const onAddToFavourite = id => {
    console.log('onAddToFavourite' + id);
  };
  const onDeleteFromFavourite = id => {
    console.log('onDeleteFromFavourite' + id);
  };
  const onLearnMore = id => {
    console.log('onLearnMore' + id);
  };

  useEffect(() => {
    const newEditedPetsData = petsData.filter(
      pet =>
        (!categoriesData || pet.category === categoriesData) &&
        isAgeCategory(pet, filtersData.age) &&
        (!filtersData.gender || pet.sex === filtersData.gender)
    );
    const newEditedPetsDataWithAge = newEditedPetsData.map(item => {
      const petAge = calcYearDifference(item.petBirthday);
      const petAgeString = `${petAge} year${!(petAge === 1) ? 's' : ''}`;
      return { ...item, age: petAgeString };
    });
    setEditedPetsData(newEditedPetsDataWithAge);
  }, [petsData, categoriesData, filtersData]);

  return (
    <div>
      <h2>Find your favorite pet</h2>

      <div>
        <NoticesCategoriesNav
          isLoggedIn={IS_LOGGED_IN}
          onChange={handleCategoriesData}
        />
        <NoticesFilters onChange={handleFiltersData} />
      </div>
      <NoticesCategoriesList
        petsData={editedPetsData}
        isLoggedIn={IS_LOGGED_IN}
        onAddToFavourite={onAddToFavourite}
        onDeleteFromFavourite={onDeleteFromFavourite}
        onLearnMore={onLearnMore}
      />
    </div>
  );
};
/*
<NoticesSearch />


<Link to="">Add pet</Link>
*/
export default NoticesPage;
