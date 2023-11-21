import {ModalNotice} from "../../components/ModalNotice/ModalNotice";
import {ModalNoticeMore} from "../../components/ModalNotice/ModalNoticeMore";
import {ModalNoticeRemove} from "../../components/ModalNotice/ModalNoticeRemove";
import { Link } from 'react-router-dom';
import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';

const pets = [
  {category:"in good hands", place: "Ivano - Frankivsk", age: "1 year", gender: "female", description: "Сute dog looking for a home"},
  {category:"lost/found", place: "Lviv", age: "1 year", gender: "female", description: "Сute dog looking for a home"},
  {category:"favorite ads", place: "Khmelnytskyi", age: "1 year", gender: "female", description: "Сute dog looking for a home"},
  {category:"my ads", place: "Lviv", age: "2 years", gender: "female", description: "Сute dog looking for a home"},
  {category:"sell", place: "Ivano - Frankivsk", age: "1 year", gender: "male", description: "Сute dog looking for a home"},
  {category:"in good hands", place: "Ivano - Frankivsk", age: "3 years", gender: "female", description: "Сute dog looking for a home"},
  {category:"lost/found", place: "Ivano - Frankivsk", age: "1 year", gender: "female", description: "Сute dog looking for a home"},
  {category:"my ads", place: "Ivano - Frankivsk", age: "2 years", gender: "male", description: "Сute dog looking for a home"},
  {category:"in good hands", place: "Chernivtsi", age: "1 year", gender: "female", description: "Сute dog looking for a home"},
  {category:"favorite ads", place: "Ivano - Frankivsk", age: "5 years", gender: "male", description: "Сute dog looking for a home"},
  {category:"in good hands", place: "Ivano - Frankivsk", age: "1 year", gender: "female", description: "Сute dog looking for a home"},
  {category:"lost/found", place: "Zaporizhzhia", age: "4 years", gender: "male", description: "Сute dog looking for a home"}
];

const NoticesPage = () => {
  return (
    <div>
      <h2>Find your favorite pet</h2>
      <NoticesSearch />
      <div>
        <NoticesCategoriesNav />
        <NoticesFilters />
        <Link to="">Add pet</Link>
      </div>
      <NoticesCategoriesList />
    </div>
  );
};

export { NoticesPage };
