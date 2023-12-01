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
      <Link to="/notices">
        <NavOption
          name="categoryOption"
          value=""
          checked={categoryData === ''}
          defaultChecked={true}
        >
          all categories
        </NavOption>
      </Link>
      <NavOption
        name="categoryOption"
        value="sell"
        checked={categoryData === 'sell'}
        defaultChecked={false}
      >
        <Link to="/notices/sell">sell</Link>
      </NavOption>
      <NavOption
        name="categoryOption"
        value="lostFound"
        checked={categoryData === 'lostFound'}
        defaultChecked={false}
      >
        <Link to="/notices/lost-found">lost/found</Link>
      </NavOption>
      <NavOption
        name="categoryOption"
        value="inGoodHands"
        checked={categoryData === 'inGoodHands'}
        defaultChecked={false}
      >
        <Link to="/notices">in good hands</Link>
      </NavOption>
      {isLoggedIn && (
        <NavOption
          name="categoryOption"
          value="favorite"
          checked={categoryData === 'favorite'}
          defaultChecked={false}
        >
          <Link to="/notices">favorite ads</Link>
        </NavOption>
      )}
      {isLoggedIn && (
        <NavOption
          name="categoryOption"
          value="own"
          checked={categoryData === 'own'}
          defaultChecked={false}
        >
          <Link to="/notices">my ads</Link>
        </NavOption>
      )}
    </NavForm>
  );
};

export { NoticesCategoriesNav };
