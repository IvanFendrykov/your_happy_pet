import styled from 'styled-components';
export const PetForm = styled.form``;

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledDatePicker = styled(DatePicker)`
 font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 264px;
  @media (min-width:560px ){ //430
    width: 458px;
  }
  height: 40px;
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid var(--blue-links, #54adff);
  margin-top: 5px;

  &:focus {
    border: 2px solid var(--blue-links, #54adff);
    outline: none;
    transition: border 0.3s ease-out;
  }

  &::placeholder {
    color: var(--gray, #888);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.56px;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 45px;
`;

export const LabelInput = styled.label`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const InputAdd = styled.input`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: -webkit-fill-available;
  @media (min-width: 560px ){ //430
    width: 458px;
  }
  width: 264px;
  height: 40px;
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid var(--blue-links, #54adff);
  margin-top: 5px;

  &:focus {
    border: 2px solid var(--blue-links, #54adff);
    outline: none;
    transition: border 0.3s ease-out;
  }

  &::placeholder {
    color: var(--gray, #888);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.56px;
  }
`;

export const LabelFile = styled.label`
  // color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  justify-content: space-evenly;

  @media (min-width: 430px){
    font-size: 20px;
  }
`;
export const FileWrapper = styled.div`
  width: 182px;
  height: 182px;
  background-color: #cce4fb;
  border-radius: 25px;
  margin-left: 14px;
  position: relative;

  @media (max-width: 430px) {
    width: 112px;
    height: 112px
  }
`;
export const InputFile = styled.input`
  opacity: 0;
  width: 182px;
  height: 182px;

  @media (max-width: 430px) {
    width: 112px;
    height: 112px
  }
`;

export const SvgIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CommentInput = styled.textarea`
  display: flex;
  width: -webkit-fill-available;
  max-width: 100%;
  height: 92px;
  padding: 8px 16px;
  position: relative;
  border-radius: 20px;
  border: 1px solid var(--blue-links, #54adff);
  margin-top: 8px;
  margin-bottom: 24px;
  resize: none;

  &:focus {
    border: 2px solid var(--blue-links, #54adff);
    outline: none;
    transition: border 0.3s ease-out;
  }

  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px 16px;
    color: var(--gray, #888);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.56px;
    transition: 0.3s ease-out;
  }
`;
