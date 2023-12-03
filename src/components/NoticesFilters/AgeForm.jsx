import icons from '../../images/symbol-defs.svg';
import { FilterForm, FilterFormButton } from './NoticesFilters.styled';
import { FilterOption } from './FilterOption';

const AGE_OPTION_DATA = [
  { value: 'up1', children: 'up to 1 year' },
  { value: 'up2', children: 'up to 2 years' },
  { value: 'from2', children: 'from 2 years' },
  { value: '', children: 'any age' },
];

const AgeForm = ({ onClick, onChange, value }) => {
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
      {AGE_OPTION_DATA.map((ageOption, ageOptionIndex) => {
        return (
          <FilterOption
            key={ageOptionIndex}
            newValue={ageOption.value}
            value={value}
            onClick={setAge}
          >
            {ageOption.children}
          </FilterOption>
        );
      })}
    </FilterForm>
  );
};

export { AgeForm };
