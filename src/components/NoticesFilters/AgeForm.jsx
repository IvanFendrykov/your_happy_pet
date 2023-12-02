import { useState } from 'react';
import icons from '../../images/symbol-defs.svg';
import { FilterForm, FilterFormButton } from './NoticesFilters.styled';
import { FilterOption } from './FilterOption';

const AgeForm = ({ onClick, onChange, initialValue }) => {
  const [ageData, setAgeData] = useState(initialValue);
  const handleInput = (event) => {
    event.preventDefault();
    const newAgeData = event.currentTarget.elements.ageOption.value;
    setAgeData(newAgeData);
    onChange(newAgeData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <FilterForm onInput={handleInput} onSubmit={handleSubmit}>
      <FilterFormButton type="submit">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <use xlinkHref={`${icons}#chevron-up`} />
        </svg>
        By age
      </FilterFormButton>
      <FilterOption name="ageOption" value="up1" checked={ageData === 'up1'}>
        up to 1 year
      </FilterOption>
      <FilterOption name="ageOption" value="up2" checked={ageData === 'up2'}>
        up to 2 years
      </FilterOption>
      <FilterOption
        name="ageOption"
        value="from2"
        checked={ageData === 'from2'}
      >
        from 2 years
      </FilterOption>
      <FilterOption
        name="ageOption"
        value="anyAge"
        checked={ageData === 'anyAge'}
      >
        any age
      </FilterOption>
    </FilterForm>
  );
};

export { AgeForm };
