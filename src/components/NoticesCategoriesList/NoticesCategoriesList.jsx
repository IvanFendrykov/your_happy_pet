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
          onAddToFavourite={onAddToFavourite}
          onDelete={onDelete}
          onLearnMore={onLearnMore}
          key={petData._id}
          id={petData._id}
          isLoggedIn={isLoggedIn}
          title={petData.title}
          category={petData.category}
          avatar={petData.avatar}
          location={petData.location}
          age={petData.age}
          sex={petData.sex}
          favourite={petData.favourite}
        />
      ))}
    </CategoriesList>
  );
};

export { NoticesCategoriesList };
