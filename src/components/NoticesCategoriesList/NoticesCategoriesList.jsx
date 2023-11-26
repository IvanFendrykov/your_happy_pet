import { NoticesCategoriesItem } from '../../components/NoticeCategoryItem/NoticesCategoriesItem';

const NoticesCategoriesList = ({ isLoggedIn, petsData }) => {
  return (
    <div>
      {petsData.map(petData => (
        <NoticesCategoriesItem
          key={petData._id}
          isLoggedIn={isLoggedIn}
          title={petData.title}
          category={petData.category}
          avatar={petData.avatar}
          location={petData.location}
          age={petData.age}
          sex={petData.sex}
        />
      ))}
    </div>
  );
};

export { NoticesCategoriesList };
