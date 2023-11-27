import styled from 'styled-components';

export const MainBox = styled.div`
  background-color: white;
  max-width: 458px;
  padding: 30px;
  flex-shrink: 0;
  align-items: center;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin: 40px auto 0;
  @media (max-width: 526px) {
    padding: 12px;
    padding-top: 20px;
  }
`;

export const MainText = styled.h1`
  color: var(--black, #111);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 32px;
`;

export const ListLines = styled.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 38px;
`;
export const ItemLines = styled.li`
  width: 33%;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${(props) => props.color};

  @media (max-width: 526px) {
    font-size: 12px;
  }
  & > * {
    background-color: ${(props) => props.color};
  }
  
  @media (max-width: 355px) {
    font-size: 10px;
  }



`;

export const SpanLine = styled.span`
  display: block;
  width: ;
  height: 8px;
  border-radius: 8px;
  margin-top: 12px;
`;

export const MainForm = styled.form`
  display: flex;
  margin-bottom: 91px;
`;
export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ChekText = styled.label`
  border-radius: 40px;
  color: #54adff;
  background: var(--blue-light, #cce4fb);
  width: fit-content;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  padding: 8px 16px;
  user-select: none;
`;
export const CheckBox = styled.input`
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`;

// &:checked {
//   background-color: #4caf50; /* Змініть на ваш колір для вибраного стану /
//   border: 1px solid #4caf50; / Змініть на ваш колір для вибраного стану /
//   color: #fff; / Змініть на ваш колір тексту для вибраного стану /

//   / Змініть цей блок для стилізації лейбла при виборі чекбокса /
//   & + label {
//     color: #4caf50; / Змініть на ваш колір для вибраного стану лейбла */
//   }

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 430px) {
    flex-direction: column-reverse;
  }
`;

export const NextBtn = styled.button`
  background: var(--blue-links, #54adff);
  color: white;
  font-size: 16px;
  border-radius: 40px;
  border: none;
  margin-left: 20px;
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const BackBtn = styled.button`
  background: var(--blue-links, #ffffff);
  color: #54adff;
  font-size: 16px;
  border-radius: 40px;
  border: none;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
