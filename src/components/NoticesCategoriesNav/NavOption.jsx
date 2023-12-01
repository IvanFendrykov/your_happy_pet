import { NavLink } from 'react-router-dom';
import {
  HiddenRadio,
  CheckedOption,
  UnCheckedOption,
} from './NoticesCategoriesNav.styled';

const NavOption = ({ to, name, value, checked, defaultChecked, children }) => {
  return checked ? (
    <CheckedOption to="sell">
      <label>
        <HiddenRadio
          type="radio"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
        />
        {children}
      </label>
    </CheckedOption>
  ) : (
    <UnCheckedOption>
      <label>
        <HiddenRadio type="radio" name={name} value={value} />
        {children}
      </label>
    </UnCheckedOption>
  );
};

export { NavOption };
