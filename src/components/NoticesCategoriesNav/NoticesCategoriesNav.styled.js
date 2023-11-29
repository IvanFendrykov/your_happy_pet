import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, colors } = theme;

const NavForm = styled.form`
  display: flex;
  column-gap: 12px;
  height: 35px;
`;

const HiddenRadio = styled.input`
  display: none;
`;

const UnCheckedOption = styled.label`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: ${colors.blue};
  font-family: ${fonts.medium}, sans-serif;
  font-size: ${fontSizes.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`;

const CheckedOption = styled.label`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  border-radius: 40px;
  background: ${colors.blue};

  color: #fef9f9;
  font-family: ${fonts.medium}, sans-serif;
  font-size: ${fontSizes.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`;

export { NavForm, HiddenRadio, CheckedOption, UnCheckedOption };
