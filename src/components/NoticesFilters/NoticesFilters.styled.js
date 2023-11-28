import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, fontWeights, colors, radii } = theme;

const FilterModal = styled.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  border-radius: 20px;
  background: #fff;

  /* Shadow default */
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

const FilterForms = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

const FilterForm = styled.form`
  display: flex;
  width: 136px;
  padding: 8px;
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

const FilterOpenButton = styled.button`
  display: flex;
  width: 152px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid #54adff;
  background-color: #fff;

  color: #54adff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
`;

const FilterCloseButton = styled.button`
  display: flex;
  width: 152px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: none;
  background-color: #fff;

  color: #54adff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
`;

const FilterFormButton = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  width: 100%;
  border: none;
  border-radius: 20px;
  background: #cce4fb;

  color: #54adff;
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
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
`;

export {
  FilterModal,
  FilterForms,
  FilterForm,
  HiddenRadio,
  StyledFilterOption,
  FilterFormButton,
  FilterOpenButton,
  FilterCloseButton,
};
