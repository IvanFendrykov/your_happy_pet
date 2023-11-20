import { Link } from 'react-router-dom';
import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';

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
