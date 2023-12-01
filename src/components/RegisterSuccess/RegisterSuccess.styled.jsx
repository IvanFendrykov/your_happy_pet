import styled from 'styled-components';

export const Section = styled.div`
width: 280px;
height: 287px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (min-width: 768px) {
  width: 608px;
  height: 354px;
}
`;

export const Header = styled.p`
display: flex;
color: var(--primary-text-color);
font-weight: 500;
font-size: 24px;
margin-bottom: 26px;

@media screen and (min-width: 768px) {
  font-size: 36px;
  margin-bottom: 38px;
}
`;

export const Text = styled.p`
  
  font-weight: 500;
  font-size: 18px;
  line-height: 1.35;
  margin-bottom: 20px;
  margin-top: 16px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 248px;
  height: 36px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme}) => theme.colors.blue};
  border-color: ${({ theme }) => theme.colors.blue};
  border-style: solid;
  border-radius: 40px;

  z-index: 2;
`;

