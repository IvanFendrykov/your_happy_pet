import { useState } from 'react';
import icons from '../../images/symbol-defs.svg';
import { FilterForm, FilterFormButton } from './NoticesFilters.styled';
import { FilterOption } from './FilterOption';

const AgeForm = ({ onClick, onChange, initialValue }) => {
  const setAge = (newAgeData) => {
    onChange(newAgeData);
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <FilterForm>
      <FilterFormButton type="submit" onClick={handleClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <use xlinkHref={`${icons}#chevron-up`} />
        </svg>
        By age
      </FilterFormButton>
      <FilterOption newValue="&age=up1" value={initialValue} onClick={setAge}>
        up to 1 year
      </FilterOption>
      <FilterOption newValue="&age=up2" value={initialValue} onClick={setAge}>
        up to 2 years
      </FilterOption>
      <FilterOption newValue="&age=from2" value={initialValue} onClick={setAge}>
        from 2 years
      </FilterOption>
      <FilterOption newValue="" value={initialValue} onClick={setAge}>
        any age
      </FilterOption>
    </FilterForm>
  );
};

export { AgeForm };
