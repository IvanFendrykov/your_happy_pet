import { useState } from 'react';
import icons from '../../images/symbol-defs.svg';
import { FilterForm, FilterFormButton } from './NoticesFilters.styled';
import { FilterOption } from './FilterOption';

const GenderForm = ({ onClick, onChange }) => {
  const [genderData, setGenderData] = useState('');
  const handleInput = (event) => {
    event.preventDefault();
    const newGenderData = event.currentTarget.elements.genderOption.value;
    setGenderData(newGenderData);
    onChange(newGenderData);
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
        By gender
      </FilterFormButton>
      <FilterOption
        name="genderOption"
        value="female"
        checked={genderData === 'female'}
        defaultChecked={false}
      >
        female
      </FilterOption>
      <FilterOption
        name="genderOption"
        value="male"
        checked={genderData === 'male'}
        defaultChecked={false}
      >
        male
      </FilterOption>
      <FilterOption
        name="genderOption"
        value=""
        checked={genderData === ''}
        defaultChecked={true}
      >
        any gender
      </FilterOption>
    </FilterForm>
  );
};

export { GenderForm };
