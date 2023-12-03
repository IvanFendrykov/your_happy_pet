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
      <FilterOption
        name="ageOption"
        value="age=up1"
        checked={ageData === 'age=up1'}
      >
        up to 1 year
      </FilterOption>
      <FilterOption
        name="ageOption"
        value="age=up2"
        checked={ageData === 'age=up2'}
      >
        up to 2 years
      </FilterOption>
      <FilterOption
        name="ageOption"
        value="age=from2"
        checked={ageData === 'age=from2'}
      >
        from 2 years
      </FilterOption>
      <FilterOption name="ageOption" value="" checked={ageData === ''}>
        any age
      </FilterOption>
    </FilterForm>
  );
};

export { AgeForm };
