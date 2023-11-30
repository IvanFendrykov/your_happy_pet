import { useEffect, useState } from 'react';
import icons from '../../images/symbol-defs.svg';
import {
  FilterModal,
  FilterForms,
  FilterFormButton,
  FilterOpenButton,
  FilterCloseButton,
} from './NoticesFilters.styled';
import { AgeForm } from './AgeForm';
import { GenderForm } from './GenderForm';

const NoticesFilters = ({ onChange }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isByAgeOpen, setIsByAgeOpen] = useState(false);
  const [isByGenderOpen, setIsByGenderOpen] = useState(false);
  const [age, setAge] = useState('anyAge');
  const [gender, setGender] = useState('');
  const [isHover, setIsHover] = useState(false);

  const showFilterIcon = () => {
    setIsHover(true);
  };

  const hideFilterIcon = () => {
    setIsHover(false);
  };

  const toggleFilters = () => {
    if (isFiltersOpen) {
      setIsFiltersOpen(false);
    } else {
      setIsFiltersOpen(true);
    }
  };

  const toggleAgeFilter = () => {
    if (isByAgeOpen) {
      setIsByAgeOpen(false);
    } else {
      setIsByAgeOpen(true);
    }
  };

  const toggleGenderFilter = () => {
    if (isByGenderOpen) {
      setIsByGenderOpen(false);
    } else {
      setIsByGenderOpen(true);
    }
  };

  const selectAge = (ageData) => {
    setAge(ageData);
  };

  const selectGender = (genderData) => {
    setGender(genderData);
  };

  useEffect(() => {
    onChange({ age, gender });
  }, [age, gender]);

  return !isFiltersOpen ? (
    <FilterOpenButton
      onClick={toggleFilters}
      onMouseOver={showFilterIcon}
      onMouseLeave={hideFilterIcon}
    >
      Filter
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke={isHover ? '#FEF9F9' : '#54adff'}
      >
        <use xlinkHref={`${icons}#filters-3`} />
      </svg>
    </FilterOpenButton>
  ) : (
    <FilterModal>
      <FilterCloseButton onClick={toggleFilters}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <use xlinkHref={`${icons}#chevron-up`} />
        </svg>
        Filters
      </FilterCloseButton>
      <FilterForms>
        {isByAgeOpen ? (
          <AgeForm
            onClick={toggleAgeFilter}
            onChange={selectAge}
            initialValue={age}
          />
        ) : (
          <FilterFormButton onClick={toggleAgeFilter}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <use xlinkHref={`${icons}#chevron-down`} />
            </svg>
            By gender
          </FilterFormButton>
        )}

        {isByGenderOpen ? (
          <GenderForm
            onClick={toggleGenderFilter}
            onChange={selectGender}
            initialValue={gender}
          />
        ) : (
          <FilterFormButton onClick={toggleGenderFilter}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <use xlinkHref={`${icons}#chevron-down`} />
            </svg>
            By gender
          </FilterFormButton>
        )}
      </FilterForms>
    </FilterModal>
  );
};

export { NoticesFilters };
