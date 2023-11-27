import {
  HiddenRadio,
  CheckedOption,
  UnCheckedOption,
} from './NoticesCategoriesNav.styled';

const NavOption = ({ name, value, checked, defaultChecked, children }) => {
  return checked ? (
    <CheckedOption>
      <HiddenRadio
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      {children}
    </CheckedOption>
  ) : (
    <UnCheckedOption>
      <HiddenRadio type="radio" name={name} value={value} />
      {children}
    </UnCheckedOption>
  );
};

export { NavOption };
