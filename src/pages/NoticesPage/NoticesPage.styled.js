import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../utils/theme';
const { fonts, fontSizes, fontWeights, colors } = theme;

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
  margin-bottom: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  row-gap: 16px;
`;

const NoticePageContrtolsRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;
`;

const AddPetLink = styled(NavLink)`
  text-decoration: none;
  height: 35px;
  display: flex;
  width: 152px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;

  border: 2px solid ${colors.blue};
  background-color: #fff;

  color: ${colors.blue};
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

const AddPetBtn = styled.div`
  row-gap: 12px;
`;
export {
  Header,
  NoticePageContrtols,
  NoticePageContrtolsRight,
  AddPetLink,
  AddPetBtn,
};
