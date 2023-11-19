import { useState } from 'react';

const NoticesFilters = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isByAgeOpen, setIsByAgeOpen] = useState(false);
  const [isByGenderOpen, setIsByGenderOpen] = useState(false);

  return (
    <div>
      <button>Filters</button>
      {isFiltersOpen &&
        (<button>By age</button>)(
          isByAgeOpen && (
            <form>
              <label>up to 1 year</label>
              <label>up to 2 years</label>
              <label>from 2 years</label>
            </form>
          )
        )(<button>By gender</button>)(
          isByGenderOpen && (
            <form>
              <label>female</label>
              <label>male</label>
            </form>
          )
        )}
    </div>
  );
};
