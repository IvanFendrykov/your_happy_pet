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

const StyledFilterOption = styled.label`
  display: flex;
  font-size: 12px;
`;

export { FilterModal, FilterForm, HiddenRadio, StyledFilterOption };
