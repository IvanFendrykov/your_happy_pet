import { Link } from 'react-router-dom';
import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav';
import {} from '../../components/NoticesFilters/NoticesFilters';
import {} from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import {} from '../../components';

const NoticesPage = () => {
  return (
    <div>
      <h2>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav />

      <Link to="">Add pet</Link>
    </div>
  );
};
