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

const NoticePageContrtols = styled.div`
  display: flex;
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

export { Header };
