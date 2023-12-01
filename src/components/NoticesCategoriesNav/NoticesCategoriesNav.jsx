import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavForm } from './NoticesCategoriesNav.styled';
import { NavOption } from './NavOption';

const NoticesCategoriesNav = ({ isLoggedIn, onChange }) => {
  const [categoryData, setCategoryData] = useState('');
  const handleInput = (event) => {
    event.preventDefault();
    const newCategoryData = event.currentTarget.elements.categoryOption.value;
    setCategoryData(newCategoryData);
    onChange(newCategoryData);
  };

  return (
    <NavForm onInput={handleInput}>
      <NavOption
        to="/notices"
        name="categoryOption"
        value=""
        checked={categoryData === ''}
        defaultChecked={true}
      >
        all categories
      </NavOption>
      <NavOption
        to="/notices/sell"
        name="categoryOption"
        value="sell"
        checked={categoryData === 'sell'}
        defaultChecked={false}
      >
        sell
      </NavOption>
      <NavOption
        to="/notices/lost-found"
        name="categoryOption"
        value="lostFound"
        checked={categoryData === 'lostFound'}
        defaultChecked={false}
      >
        lost/found
      </NavOption>
      <NavOption
        to="/notices/inGoodHands"
        name="categoryOption"
        value="inGoodHands"
        checked={categoryData === 'inGoodHands'}
        defaultChecked={false}
      >
        in good hands
      </NavOption>
      {isLoggedIn && (
        <NavOption
          to="/notices/favorite"
          name="categoryOption"
          value="favorite"
          checked={categoryData === 'favorite'}
          defaultChecked={false}
        >
          favorite ads
        </NavOption>
      )}
      {isLoggedIn && (
        <NavOption
          to="/notices/own"
          name="categoryOption"
          value="own"
          checked={categoryData === 'own'}
          defaultChecked={false}
        >
          my ads
        </NavOption>
      )}
    </NavForm>
  );
};

export { NoticesCategoriesNav };
