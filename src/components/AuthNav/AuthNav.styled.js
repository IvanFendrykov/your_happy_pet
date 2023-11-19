import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuthBtn = styled(Link)`
  display: flex;
  width: 165px;
  max-height: 38px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid #ffc107;
  background-color: #ffc107;
  text-decoration: none;

  color: #fef9f9;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    fill: #fef9f9;
  }

  &:hover {
    background-color: #fef9f9;
    color: #ffc107;

    svg {
      fill: #ffc107;
    }
  }
`;
