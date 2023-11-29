import styled from '@emotion/styled';
import { theme } from 'utils/theme';
const { fonts, fontSizes, fontWeights, colors /*, media*/ } = theme;

const Header = styled.h3`
  color: var(--, #111);
  font-family: Manrope;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export { Header };
