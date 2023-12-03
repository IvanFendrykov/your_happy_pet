import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, colors } = theme;

const NavForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const UnCheckedOption = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 35px;
  padding: 8px 16px;

  border: 2px solid ${colors.blue_light};
  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: ${colors.blue};
  font-family: ${fonts.medium}, sans-serif;
  font-size: ${fontSizes.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

  :hover {
    border: 2px solid ${colors.blue};
  }
`;

const CheckedOption = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 35px;
  padding: 8px 16px;

  border: 2px solid ${colors.blue};
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

export { NavForm, CheckedOption, UnCheckedOption };
