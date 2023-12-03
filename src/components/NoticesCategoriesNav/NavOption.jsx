import { NavLink } from 'react-router-dom';
import { CheckedOption, UnCheckedOption } from './NoticesCategoriesNav.styled';

const NavOption = ({ value, newValue, onClick, children }) => {
  const handleClick = () => {
    onClick(newValue);
  };

  return newValue === value ? (
    <CheckedOption onClick={handleClick}>{children}</CheckedOption>
  ) : (
    <UnCheckedOption onClick={handleClick}>{children}</UnCheckedOption>
  );
};

export { NavOption };
