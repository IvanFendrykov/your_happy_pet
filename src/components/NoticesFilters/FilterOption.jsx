import icons from '../../images/symbol-defs.svg';
import { HiddenRadio, StyledFilterOption } from './NoticesFilters.styled';

const FilterOption = ({ name, value, checked, defaultChecked, children }) => {
  return (
    <StyledFilterOption>
      <HiddenRadio
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <use xlinkHref={`${icons}#${checked ? 'check-round' : 'round'}`} />
      </svg>
      {children}
    </StyledFilterOption>
  );
};

export { FilterOption };
