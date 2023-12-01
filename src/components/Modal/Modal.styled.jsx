import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #51515199;

  overflow-y: scroll;
  z-index: 4;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 24%;
  left: 52%;
  transform: translateX(-50%);
  border-radius: 20px;
  background-color: #ffffff;

  z-index: 3;

  @media screen and (min-width: 452px) {
    border-radius: 40px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 12px;
  right: unset;
  left: 96px;
  z-index: 4;
  background-color: transparent;
  border: none;

  color: black;

  & svg {
    stroke: #54ADFF;
    transition: stroke 250ms;
  }
  &:hover svg,
  &:focus svg {
    stroke: #FFC107;
  }

  @media screen and (min-width: 767px) {
  top: 26px;
  left: 244px;
  }
`;