import { useState } from 'react';
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
        name="categoryOption"
        value=""
        checked={categoryData === ''}
        defaultChecked={true}
      >
        all categories
      </NavOption>
      <NavOption
        name="categoryOption"
        value="sell"
        checked={categoryData === 'sell'}
        defaultChecked={false}
      >
        sell
      </NavOption>
      <NavOption
        name="categoryOption"
        value="lost-found"
        checked={categoryData === 'lost-found'}
        defaultChecked={false}
      >
        lost/found
      </NavOption>
      <NavOption
        name="categoryOption"
        value="for-free"
        checked={categoryData === 'for-free'}
        defaultChecked={false}
      >
        in good hands
      </NavOption>
      {isLoggedIn && (
        <NavOption
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
