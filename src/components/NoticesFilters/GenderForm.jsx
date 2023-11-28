import { useState } from 'react';
import { FilterForm } from './NoticesFilters.styled';
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
      <button type="submit">By gender</button>
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
