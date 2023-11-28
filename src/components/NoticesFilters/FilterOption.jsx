import icons from '../../images/symbol-defs.svg';
import { HiddenRadio, FilterOption } from './NoticesFilters.styled';

const FilterOption = ({ name, value, checked, defaultChecked, children }) => {
  return (
    <FilterOption>
      <HiddenRadio
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <use xlinkHref={`${icons}#${checked ? 'check-round' : 'round'}`} />
      </svg>
      {children}
    </FilterOption>
  );
};
//      checked ?
export { FilterOption };
