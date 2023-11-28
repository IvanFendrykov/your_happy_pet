import { NoticesCategoriesItem } from '../../components/NoticeCategoryItem/NoticesCategoriesItem';
import { CategoriesList } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({
  isLoggedIn,
  petsData,
  onAddToFavourite,
  onDeleteFromFavourite,
  onLearnMore,
  handleShowMore
}) => {
  return (
    <CategoriesList>
      {petsData.map(petData => (
        <NoticesCategoriesItem
          handleShowMore={handleShowMore}
          onAddToFavourite={onAddToFavourite}
          onDeleteFromFavourite={onDeleteFromFavourite}
          onLearnMore={onLearnMore}
          key={petData._id}
          id={petData._id}
          isLoggedIn={isLoggedIn}
          title={petData.title}
          category={petData.category}
          avatar={petData.image}
          location={petData.location}
          age={petData.age}
          sex={petData.sex}
        />
      ))}
    </CategoriesList>
  );
};

export { NoticesCategoriesList };
