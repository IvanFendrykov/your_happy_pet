import styled from 'styled-components';

export const PetContainer = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 16px;
  width: 280px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  background-color: #fff;
  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
    width: 704px;
    padding-right: 76px;
    padding-bottom: 58px;
  }

  @media (min-width: 1280px) {
    gap: 32px;
  }
`;

export const PetImage = styled.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    height: 128px;
    width: 128px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 1280px) {
    height: 161px;
    width: 161px;
  }
`;

export const PetInfoWrapper = styled.div``;

export const PetInfo = styled.p`
  letter-spacing: 0.56px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Label = styled.span`
  color: #111;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  position: absolute;
  top: 272px;
  right: 16px;
  @media (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
