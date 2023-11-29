import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontWeights } = theme;

const Header = styled.h3`
  margin-top: 90px;
  color: #111;
  font-family: ${fonts.bold}, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: ${fontWeights.bold};
  text-align: center;
  line-height: normal;
`;

export { Header };
