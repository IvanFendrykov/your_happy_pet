import { useEffect, useState } from 'react';
import { NavForm } from './NoticesCategoriesNav.styled';
import { NavOption } from './NavOption';
import { useNavigate } from 'react-router-dom';

const NoticesCategoriesNav = ({ isLoggedIn, onChange }) => {
  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState('');
  const setCategory = (newCategoryData) => {
    setCategoryData(newCategoryData);
    onChange(newCategoryData);
  };

  useEffect(() => {
    if (categoryData) {
      navigate(`/notices/${categoryData}`);
    } else {
      navigate(`/notices`);
    }
  }, []);

  return (
    <NavForm>
      <NavOption newValue="" value={categoryData} onClick={setCategory}>
        all categories
      </NavOption>
      <NavOption newValue="sell" value={categoryData} onClick={setCategory}>
        sell
      </NavOption>
      <NavOption
        newValue="lostFound"
        value={categoryData}
        onClick={setCategory}
      >
        lost/found
      </NavOption>
      <NavOption
        newValue="inGoodHands"
        value={categoryData}
        onClick={setCategory}
      >
        in good hands
      </NavOption>
      {isLoggedIn && (
        <NavOption
          newValue="favorite"
          value={categoryData}
          onClick={setCategory}
        >
          favorite ads
        </NavOption>
      )}
      {isLoggedIn && (
        <NavOption newValue="own" value={categoryData} onClick={setCategory}>
          my ads
        </NavOption>
      )}
    </NavForm>
  );
};
// onClick={setCategory}
export { NoticesCategoriesNav };
