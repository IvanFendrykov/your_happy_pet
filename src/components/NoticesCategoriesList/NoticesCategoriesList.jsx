import { NoticesCategoriesItem } from '../../components/NoticeCategoryItem/NoticesCategoriesItem';
import { CategoriesList } from './NoticesCategoriesList.styled';
import { nanoid } from 'nanoid';

const NoticesCategoriesList = ({
  isLoggedIn,
  petsData,
  onAddToFavourite,
  onDelete,
  onLearnMore,
  myAdds,
}) => {
  return (
    <CategoriesList>
      {petsData.map((petData) => (
        <NoticesCategoriesItem
          petData={petData}
          onAddToFavourite={onAddToFavourite}
          onDelete={onDelete}
          onLearnMore={onLearnMore}
          key={nanoid()}
          id={petData._id}
          isLoggedIn={isLoggedIn}
        />
      ))}
    </CategoriesList>
  );
};

export { NoticesCategoriesList };
/*
      {
        petsData.map((petData) => (
          <NoticesCategoriesItem
            petData={petData}
            onAddToFavourite={onAddToFavourite}
            onDelete={onDelete}
            onLearnMore={onLearnMore}
            key={nanoid()}
            id={petData._id}
            isLoggedIn={isLoggedIn}
          />
        ));
      }*/
