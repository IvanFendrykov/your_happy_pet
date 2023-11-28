import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, fontWeights, colors, radii } = theme;

const FilterModal = styled.div`
  display: flex;
  width: 152px;
  height: 334px;
  padding: 14px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FilterForm = styled.form`
  display: flex;
  width: 136px;
  padding: 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 20px;
  background: var(--blue-light, #cce4fb);

  color: var(--unnamed, #54adff);
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
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

  color: var(--unnamed, #54adff);
  font-family: Manrope;
  font-size: 14px;
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
  background: #54adff;

  color: #fef9f9;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`;

export { FilterModal, FilterForm, HiddenRadio, CheckedOption, UnCheckedOption };
