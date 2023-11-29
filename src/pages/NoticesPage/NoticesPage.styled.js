import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, fontWeights, colors /*, media*/ } = theme;

const Header = styled.h3`
  @import url('../../utils/fonts/Manrope-Bold.ttf');

  margin-top: 90px;
  color: #111;
  font-family: 'Manrope', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  line-height: normal;
`;

export { Header };
