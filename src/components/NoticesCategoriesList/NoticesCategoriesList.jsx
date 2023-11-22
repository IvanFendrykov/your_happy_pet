import { NoticesCategoriesItem } from '../../components/NoticeCategoryItem/NoticesCategoriesItem';

const NoticesCategoriesList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <NoticesCategoriesItem
          description={item.description}
          category={item.category}
          place={item.place}
          age={item.age}
          gender={item.gender}
        />
      ))}
    </div>
  );
};

export { NoticesCategoriesList };
