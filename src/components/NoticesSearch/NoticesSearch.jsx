import PropTypes from 'prop-types';
import icons from '../../images/symbol-defs.svg';
import { useState, useEffect } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  CleareUpBtn,
} from './NoticesSearch.styled';

const NoticesSearch = ({
  //  onFormSubmit 
  }) => {
  //  const [query, setQuery] = useState('');

  // useEffect(() => {
  //   if (!query) onFormSubmit(query);
  // }, [onFormSubmit, query]);

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   onFormSubmit(query);
  // };

  // const onInputChange = (e) => {
  //   const searchQuery = e.target.value;

  //   setQuery(searchQuery);
  // };

  return (
    <SearchForm 
    // onSubmit={submitHandler}
    >
      <SearchInput
        // type="text"
        // placeholder="Search"
        // name="query"
        // id="searchQquery"
        // onChange={onInputChange}
        // value={query}
      />
      <SearchButton
      //  type="submit" query={query} aria-label="Submit"
       >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <use xlinkHref={`${icons}#search`} />
        </svg>
      </SearchButton>
      <CleareUpBtn
      // type="button"
      // onClick={() => setQuery('')}
      // query={query}
      // aria-label="Discard query"
      ></CleareUpBtn>
    </SearchForm>
  );
};

// NoticesSearch.propTypes = {
//   onFormSubmit: PropTypes.func.isRequired,
// };

export default NoticesSearch;
