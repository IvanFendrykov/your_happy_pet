import icons from '../../images/symbol-defs.svg';
import { StyledFilterOption } from './NoticesFilters.styled';

const FilterOption = ({ value, newValue, onClick, children }) => {
  const handleClick = () => {
    onClick(newValue);
  };

  return (
    <StyledFilterOption onClick={handleClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <use
          xlinkHref={`${icons}#${newValue === value ? 'check-round' : 'round'}`}
        />
      </svg>
      {children}
    </StyledFilterOption>
  );
};

export { FilterOption };
