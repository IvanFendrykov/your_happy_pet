import { NavForm } from './NoticesCategoriesNav.styled';
import { NavOption } from './NavOption';

const NAV_OPTION_DATA = [
  { value: '', children: 'all categories', isAuthNeeded: false },
  { value: 'sell', children: 'sell', isAuthNeeded: false },
  { value: 'lostFound', children: 'lost/found', isAuthNeeded: false },
  { value: 'inGoodHands', children: 'in good hands', isAuthNeeded: false },
  { value: 'favorite', children: 'favorite ads', isAuthNeeded: true },
  { value: 'own', children: 'my ads', isAuthNeeded: true },
];

const NoticesCategoriesNav = ({ isLoggedIn, onChange, category }) => {
  const setCategory = (newCategoryData) => {
    onChange(newCategoryData);
  };

  return (
    <NavForm>
      {NAV_OPTION_DATA.map((navOption, navOptionIndex) => {
        return (
          (!navOption.isAuthNeeded || isLoggedIn) && (
            <NavOption
              key={navOptionIndex}
              newValue={navOption.value}
              value={category}
              onClick={setCategory}
            >
              {navOption.children}
            </NavOption>
          )
        );
      })}
    </NavForm>
  );
};

export { NoticesCategoriesNav };
