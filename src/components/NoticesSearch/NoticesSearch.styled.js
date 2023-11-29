import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, fontWeights, colors } = theme;

const SearchForm = styled.form`
  width: 608px;
  height: 44px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  background: #fff;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

const SearchInput = styled.input`
  width: 544px;
  height: 44px;
  border: none;
  background: none;
  outline: none;
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background: none;
`;

export { SearchForm, SearchInput, SearchButton };
