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
              <label>
                <input type="checkbox" />
                up to 1 year
              </label>
              <label>
                <input type="checkbox" />
                up to 2 years
              </label>
              <label>
                <input type="checkbox" />
                from 2 years
              </label>
            </form>
          ),
        )(<button>By gender</button>)(
          isByGenderOpen && (
            <form>
              <label>
                <input type="checkbox" />
                female
              </label>
              <label>
                <input type="checkbox" />
                male
              </label>
            </form>
          ),
        )}
    </div>
  );
};

export { NoticesFilters };
