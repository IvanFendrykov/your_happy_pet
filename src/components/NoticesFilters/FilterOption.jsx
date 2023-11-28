import icons from '../../images/symbol-defs.svg';
import {
  HiddenRadio,
  CheckedOption,
  UnCheckedOption,
} from './NoticesCategoriesNav.styled';

const FilterOption = ({ name, value, checked, defaultChecked, children }) => {
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

export { FilterOption };
