import { FilterForm } from './NoticesFilters.styled';

const GenderForm = ({ onChange }) => {
  const handleInput = (event) => {
    event.preventDefault();
    const genderData = event.currentTarget.elements.genderOption.value;
    onChange(genderData);
  };

  return (
    <FilterForm onInput={handleInput}>
      <label>
        <input type="radio" name="genderOption" value="female" />
        female
      </label>
      <label>
        <input type="radio" name="genderOption" value="male" />
        male
      </label>
      <label>
        <input type="radio" name="genderOption" value="" defaultChecked />
        any gender
      </label>
    </FilterForm>
  );
};

export { GenderForm };
