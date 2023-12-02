import { useState } from 'react';
import icons from '../../images/symbol-defs.svg';
import { SearchForm, SearchInput, SearchButton } from './NoticesSearch.styled';

const NoticesSearch = (onSubmit) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.currentTarget.elements.searchInput.value);
    event.currentTarget.reset();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput name="searchInput" type="text" placeholder="Search" />
      <SearchButton type="submit">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <use xlinkHref={`${icons}#search`} />
        </svg>
      </SearchButton>
    </SearchForm>
  );
};

export { NoticesSearch };
