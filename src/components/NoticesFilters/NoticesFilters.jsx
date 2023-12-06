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

const NoticesFilters = ({ onChangeAge, onChangeGender, age, gender }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAgeFilterOpen, setIsAgeFilterOpen] = useState(false);
  const [isGenderFilterOpen, setIsGenderFilterOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const showFilterIcon = () => {
    setIsHover(true);
  };

  const hideFilterIcon = () => {
    setIsHover(false);
  };

  const openFilter = () => {
    setIsFilterOpen(true);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const openAgeFilter = () => {
    setIsAgeFilterOpen(true);
  };

  const closeAgeFilter = () => {
    setIsAgeFilterOpen(false);
  };

  const openGenderFilter = () => {
    setIsGenderFilterOpen(true);
  };

  const closeGenderFilter = () => {
    setIsGenderFilterOpen(false);
  };

  const selectAge = (ageData) => {
    onChangeAge(ageData);
  };

  const selectGender = (genderData) => {
    onChangeGender(genderData);
  };

  return !isFilterOpen ? (
    <FilterOpenButton
      onClick={openFilter}
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
      <FilterCloseButton onClick={closeFilter}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <use xlinkHref={`${icons}#chevron-up`} />
        </svg>
        Filters
      </FilterCloseButton>
      <FilterForms>
        {isAgeFilterOpen ? (
          <AgeForm onClick={closeAgeFilter} onChange={selectAge} value={age} />
        ) : (
          <FilterFormButton onClick={openAgeFilter}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <use xlinkHref={`${icons}#chevron-down`} />
            </svg>
            By gender
          </FilterFormButton>
        )}

        {isGenderFilterOpen ? (
          <GenderForm
            onClick={closeGenderFilter}
            onChange={selectGender}
            value={gender}
          />
        ) : (
          <FilterFormButton onClick={openGenderFilter}>
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
