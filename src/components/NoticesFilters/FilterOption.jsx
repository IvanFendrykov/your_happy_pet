import icons from '../../images/symbol-defs.svg';
import { HiddenRadio, FilterOption } from './NoticesFilters.styled';

const FilterOption = ({ name, value, checked, defaultChecked, children }) => {
  return (
    <FilterOption>
      <HiddenRadio type="radio" name={name} value={value} />

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <use xlinkHref={`${icons}#${checked ? 'check-round' : 'round'}`} />
      </svg>
      {children}
    </FilterOption>
  );
};
//        defaultChecked={defaultChecked}
export { FilterOption };
