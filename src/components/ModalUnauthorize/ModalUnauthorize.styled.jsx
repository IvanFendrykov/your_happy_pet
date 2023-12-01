import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 445px;
  width: 280px;
  border-radius: 20px;
  background-color: white;
  transition: width 0.5s ease;
  z-index: 3;
  
  @media screen and (min-width: 768px) {
    border-radius: 40px;
    width: 608px;
    height: 429px;
  }
`;


export const ModalContent = styled.div`
  display: flex;
  width: 280px;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  transition: width 0.5s ease;
  
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const ModalTitle = styled.h2`
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  transition: font-size 0.5s ease;
  
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49.18px;
    padding-bottom: 40px;
  }
`;

export const ModalDescription = styled.p`
  padding: 20px;
  padding-top: 0;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
  }
`;



export const NavContainer = styled.div`

  display: flex;
  padding-top: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
  flex-direction: column;
  gap: 12px;
  }
`;
