import { useState } from 'react';
import icons from '../../images/symbol-defs.svg';
import { FilterForm, FilterFormButton } from './NoticesFilters.styled';
import { FilterOption } from './FilterOption';

const GenderForm = ({ onClick, onChange, value }) => {
  const setGender = (newGenderData) => {
    onChange(newGenderData);
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <FilterForm>
      <FilterFormButton type="button" onClick={handleClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <use xlinkHref={`${icons}#chevron-up`} />
        </svg>
        By gender
      </FilterFormButton>
      <FilterOption newValue="&gender=female" value={value} onClick={setGender}>
        female
      </FilterOption>
      <FilterOption newValue="&gender=male" value={value} onClick={setGender}>
        male
      </FilterOption>
      <FilterOption newValue="" value={value} onClick={setGender}>
        any gender
      </FilterOption>
    </FilterForm>
  );
};

export { GenderForm };
