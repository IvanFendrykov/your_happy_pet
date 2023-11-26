import styled from 'styled-components';

export const CheckBoxWrap = styled.div`
  display: flex;
  gap: 16px;
`;
export const SVGsex = styled.svg`
  position: absolute;
  left: 0;
  fill: black;
`;
export const LabelChekbox = styled.label`
  display: inline-flex;
  height: 35px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  gap: 8px;
  flex-shrink: 0;
  position: relative;
  user-select: none;
  margin-bottom: 16px;
`;

export const SexTitle = styled.h2`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const InputChekbox = styled.input`
  opacity: 0;
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`;
export const DownInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
