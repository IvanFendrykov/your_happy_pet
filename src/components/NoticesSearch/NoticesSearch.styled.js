import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts } = theme;

const SearchForm = styled.form`
  margin-top: 40px;
  margin-inline: auto;
  margin-bottom: 43px;
  max-width: 608px;
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  border: none;
  background: none;
  outline: none;

  color: #888;
  font-family: ${fonts.regular}, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;

  ::placeholder {
    color: #888;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.8px;
  }
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background: none;
`;
const CleareUpBtn = styled.button`
  right: 13px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background: none;

  transform: translateX(0);
  ${'' /* opacity: ${({ query }) => (query ? 1 : 0)};

  transition: opacity 300ms ${({ theme }) => theme.transition.main};

  & svg {
    stroke: ${({ theme }) => theme.colors.yellow};
  } */}
`;

export { SearchForm, SearchInput, SearchButton, CleareUpBtn };
