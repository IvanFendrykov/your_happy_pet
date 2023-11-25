import { useEffect, useState } from 'react';
import { AgeForm } from './AgeForm';
import { GenderForm } from './GenderForm';

const NoticesFilters = ({ onChange }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isByAgeOpen, setIsByAgeOpen] = useState(false);
  const [isByGenderOpen, setIsByGenderOpen] = useState(false);
  const [age, setAge] = useState({
    upToOne: false,
    upToTwo: false,
    fromTwo: false,
  });
  const [gender, setGender] = useState({
    female: false,
    male: false,
  });

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

  const selectAge = ageData => {
    setAge(ageData);
  };

  const selectGender = genderData => {
    setGender(genderData);
  };

  useEffect(() => {
    onChange({ age, gender });
  }, [age, gender, onChange]);

  return (
    <div>
      <button onClick={toggleFilters}>Filters</button>
      {isFiltersOpen && (
        <div>
          <button onClick={toggleAgeFilter}>By age</button>
          {isByAgeOpen && <AgeForm onChange={selectAge} />}
          <button onClick={toggleGenderFilter}>By gender</button>
          {isByGenderOpen && <GenderForm onChange={selectGender} />}
        </div>
      )}
    </div>
  );
};

export { NoticesFilters };
