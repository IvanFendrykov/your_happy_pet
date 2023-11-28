import styled from '@emotion/styled';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, fontWeights, colors, radii } = theme;

const CategoryItem = styled.div`
  width: 288px;
  height: 456px;
  border-radius: 0px 0px 40px 40px;
  background: var(--, #fff);

  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

const CategoryItemHeader = styled.div`
  position: relative;
  width: 100%;
  height: 288px;
`;

const CategoryItemFooter = styled.div`
  padding: 20px;
`;

const CategoryItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 288px;
`;

const CategoryOutput = styled.div`
  position: absolute;
  top: 16px;
  left: 0;

  display: flex;
  width: 126px;
  height: 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: var(--, #111);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: ${fonts.medium};
  font-size: ${fontSizes.s};
  font-style: normal;
  line-height: normal;

  border-radius: 0px 16px 16px 0px;
  background: var(--blue-light, ${colors.blue_light});
`;

const AddButton = styled.button`
  position: absolute;
  top: 16px;
  right: 12px;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: ${radii.round};
  background: var(--blue-light, ${colors.blue_light});
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 64px;
  right: 12px;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: ${radii.round};
  background: var(--blue-light, ${colors.blue_light});
`;

const PetInfoOutput = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0px;

  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const PetInfoOutputItem = styled.div`
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: left;
  align-items: center;
  gap: 4px;

  color: var(--, #111);
  font-family: ${fonts.semiBold};
  overflow-wrap: break-word;

  border-radius: 16px;
  background: ${colors.blue_light};

  overflow: hidden;
  color: var(--, #111);

  font-family: ${fonts.semiBold};
  font-size: ${fontSizes.xs};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.48px;
`;

const Span = styled.span`
  display: flex;
  overflow-wrap: break-word;
`;

const TitleHeader = styled.h3`
  padding-block: none;
  color: var(--, #111);
  font-family: ${fonts.bold};
  font-size: 24px;
`;

const LearnMoreButton = styled.button`
  margin-top: 20px;
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: inherit;
  border-radius: 40px;
  border: 2px solid var(--unnamed, ${colors.blue});

  color: var(--unnamed, ${colors.blue});
  font-family: ${fonts.semiBold};
  font-size: ${fontSizes.m};
  line-height: normal;
  letter-spacing: 0.64px;

  :hover,
  :focus {
    border: none;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
    font-family: ${fonts.bold};
    font-size: ${fontSizes.m};
    line-height: normal;
    letter-spacing: 0.64px;
  }
`;

export {
  CategoryItem,
  CategoryItemHeader,
  CategoryItemFooter,
  CategoryItemImage,
  CategoryOutput,
  AddButton,
  RemoveButton,
  PetInfoOutput,
  PetInfoOutputItem,
  Span,
  TitleHeader,
  LearnMoreButton,
};
