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
        value="upToOne"
        checked={ageData === 'upToOne'}
      >
        up to 1 year
      </FilterOption>
      <FilterOption
        name="ageOption"
        value="upToTwo"
        checked={ageData === 'upToTwo'}
      >
        up to 2 years
      </FilterOption>
      <FilterOption
        name="ageOption"
        value="fromTwo"
        checked={ageData === 'fromTwo'}
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
