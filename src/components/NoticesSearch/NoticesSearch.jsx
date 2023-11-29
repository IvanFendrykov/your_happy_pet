//import { useState } from 'react';
import { SearchForm, SearchInput, SearchButton } from './NoticesSearch.styled';

const NoticesSearch = () => {
  return (
    <SearchForm>
      <SearchInput type="text" />
      <SearchButton type="submit"></SearchButton>
    </SearchForm>
  );
};

export { NoticesSearch };
