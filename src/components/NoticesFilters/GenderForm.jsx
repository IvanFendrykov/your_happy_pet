import icons from '../../images/symbol-defs.svg';
import { FilterForm, FilterFormButton } from './NoticesFilters.styled';
import { FilterOption } from './FilterOption';

const AGE_OPTION_DATA = [
  { value: 'female', children: 'female' },
  { value: 'male', children: 'male' },
  { value: '', children: 'any gender' },
];

const GenderForm = ({ onClick, onChange, value }) => {
  const setGender = (newGenderData) => {
    onChange(newGenderData);
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
        By gender
      </FilterFormButton>
      {AGE_OPTION_DATA.map((genderOption, genderOptionIndex) => {
        return (
          <FilterOption
            key={genderOptionIndex}
            newValue={genderOption.value}
            value={value}
            onClick={setGender}
          >
            {genderOption.children}
          </FilterOption>
        );
      })}
    </FilterForm>
  );
};

export { GenderForm };
