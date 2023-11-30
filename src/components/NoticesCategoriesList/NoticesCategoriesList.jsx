import { NoticesCategoriesItem } from '../../components/NoticeCategoryItem/NoticesCategoriesItem';
import { CategoriesList } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({
  isLoggedIn,
  petsData,
  onAddToFavourite,
  onDelete,
  onLearnMore,
}) => {
  return (
    <CategoriesList>
      {petsData.map((petData) => (
        <NoticesCategoriesItem
          petData={petData}
          onAddToFavourite={onAddToFavourite}
          onDelete={onDelete}
          onLearnMore={onLearnMore}
          key={petData._id}
          id={petData._id}
          isLoggedIn={isLoggedIn}
        />
      ))}
    </CategoriesList>
  );
};

export { NoticesCategoriesList };
