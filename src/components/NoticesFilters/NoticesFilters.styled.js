import styled from '@emotion/styled';

import { theme } from '../../utils/theme';
const { fonts, fontSizes, fontWeights, colors } = theme;

const FilterModal = styled.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

const FilterForms = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

const FilterForm = styled.div`
  display: flex;
  width: 136px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 20px;
  background: ${colors.blue_light};

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: ${fonts.normal}, sans-serif;
  font-size: ${fontSizes.s};
  font-style: normal;
  font-weight: ${fontWeights.normal};
  line-height: 130%; /* 18.2px */
`;

const FilterOpenButton = styled.button`
  display: flex;
  width: 152px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid ${colors.blue};
  background-color: #fff;

  color: #54adff;
  font-family: ${fonts.bold}, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${fontWeights.bold};
  line-height: normal;
  letter-spacing: 0.64px;

  :hover,
  :focus {
    padding: 6px 12px;
    border: none;
    border-radius: 40px;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
`;

const FilterCloseButton = styled.button`
  display: flex;
  width: 136px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid #fff;
  background-color: #fff;

  color: #54adff;
  font-family: ${fonts.bold}, sans-serif;
  font-size: ${fontSizes.m};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;

  :hover {
    border: 2px solid ${colors.blue};
  }
`;

const FilterFormButton = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 100%;
  border: none;
  border-radius: 20px;
  background: #cce4fb;
  border: 2px solid ${colors.blue_light};

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: ${fonts.regular}, sans-serif;
  font-size: ${fontSizes.s};
  font-style: normal;
  font-weight: ${fontWeights.normal};
  line-height: 130%; /* 18.2px */

  :hover {
    border: 2px solid ${colors.blue};
  }
`;

const StyledFilterOption = styled.button`
  box-sizing: border-box;
  height: 30px;
  width: 120px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
  border: 2px solid ${colors.blue_light};
  border-radius: 20px;
  background: none;

  color: ${colors.blue};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${fonts.regular}, sans-serif;
  font-size: ${fontSizes.xs};
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */

  :hover {
    border: 2px solid ${colors.blue};
  }
`;

export {
  FilterModal,
  FilterForms,
  FilterForm,
  StyledFilterOption,
  FilterFormButton,
  FilterOpenButton,
  FilterCloseButton,
};
