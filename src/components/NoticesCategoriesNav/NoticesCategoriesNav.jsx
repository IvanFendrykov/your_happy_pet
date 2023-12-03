import { NavForm } from './NoticesCategoriesNav.styled';
import { NavOption } from './NavOption';

const NoticesCategoriesNav = ({ isLoggedIn, onChange, category }) => {
  const setCategory = (newCategoryData) => {
    onChange(newCategoryData);
  };

  return (
    <NavForm>
      <NavOption newValue="" value={category} onClick={setCategory}>
        all categories
      </NavOption>
      <NavOption newValue="sell" value={category} onClick={setCategory}>
        sell
      </NavOption>
      <NavOption newValue="lostFound" value={category} onClick={setCategory}>
        lost/found
      </NavOption>
      <NavOption newValue="inGoodHands" value={category} onClick={setCategory}>
        in good hands
      </NavOption>
      {isLoggedIn && (
        <NavOption newValue="favorite" value={category} onClick={setCategory}>
          favorite ads
        </NavOption>
      )}
      {isLoggedIn && (
        <NavOption newValue="own" value={category} onClick={setCategory}>
          my ads
        </NavOption>
      )}
    </NavForm>
  );
};

export { NoticesCategoriesNav };
