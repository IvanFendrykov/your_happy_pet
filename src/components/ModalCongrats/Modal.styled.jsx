import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #51515199;

  overflow-y: scroll;
  z-index: 101;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;

  transform: translateX(-50%);
  border-radius: 20px;
  background-color: #ffffff;

  z-index: 3;

`;

export const BtnClose = styled.button`
display: flex;
margin-left: auto;
outline: none;

&:svg {
  fill: blue;
}
  }
`;
