import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 63px;
    width: calc(100% - 40px);
  }
  @media screen and (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const FieldsContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // gap: 20px;
  // margin-top: 22px;
  // width: 264px;
  // @media screen and (min-width: 768px) {
  //   margin-top: 0;
  //   width: 355px;
  // }
  position: relative;
  margin-top: 59px;
  display: grid;
  grid-template-columns: 66px 1fr;
  grid-template-rows: 24px 24px 24px 24px 24px 24px;
  grid-template-areas:
    '. .'
    '. .'
    '. .'
    '. .'
    '. .'
    '. submit';
  gap: 20px 8px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 355px;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 30px 30px 30px 30px 30px;
    gap: 20px 0px;
  }
`;

const UserPhoto = styled.img`
  display: block;
  margin: auto;
  width: 182px;
  height: 182px;
  border-radius: 40px;
`;

const FileInput = styled.input`
  // opacity: 0;
  // width: 0.1px;
  // height: 0.1px;
  display: none;
`;

const FileInputLabel = styled.label`
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;
  color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: color var(--duration) var(--cubic);
  svg {
    width: 24px;
    height: 24px;
    fill: var(--btn-bg-color);
    transition: fill var(--duration) var(--cubic);
  }
  &:hover {
    color: var(--header-items-color);
    svg {
      fill: var(--header-items-color);
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.56px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      letter-spacing: 0.72px;
    }
  }
  input {
    display: flex;
    padding: 4px 12px;
    align-items: center;
    gap: 191px;
    border-radius: 20px;
    border: 1px solid var(--btn-bg-color);
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.48px;
    transition: border-color var(--duration) var(--cubic);
    &:hover,
    &:focus {
      border-color: var(--header-items-color);
      outline: transparent;
    }
    @media screen and (min-width: 768px) {
      height: 30px;
      font-size: 16px;
    }
  }
`;
const Label = styled.label`
  display: flex;
  align-items: flex-end;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`;

const Input = styled.input`
  display: flex;
  padding: 4px 12px;
  align-items: center;
  gap: 191px;
  border-radius: 20px;
  border: 1px solid var(--btn-bg-color);
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  transition: border-color var(--duration) var(--cubic);
  &:hover,
  &:focus {
    border-color: var(--header-items-color);
    outline: transparent;
  }
  @media screen and (min-width: 768px) {
    height: 30px;
    font-size: 16px;
  }
`;
const SubmitButton = styled.button`
  grid-column: 1 / span 2;

  display: flex;
  width: 248px;
  padding: 6px 107px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: var(--btn-bg-color);
  border-color: transparent;
  color: var(--label-active-color);
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  cursor: pointer;
  margin: auto;
  transition: all var(--duration) var(--cubic);
  &:hover,
  &:focus {
    background: var(--hover-btn-bg-color);
  }
  &:disabled {
    background: grey;
  }

  @media screen and (min-width: 768px) {
    grid-area: submit;
  }
`;

const Error = styled.p`
  position: absolute;
  top: -15px;
  left: 35%;
  color: red;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    left: 32%;
  }
  @media screen and (min-width: 1200px) {
  }
`;

const Text = styled.p`
  color: #111;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;
`;

export {
  FieldsContainer,
  UserPhoto,
  FileInput,
  FileInputLabel,
  InputContainer,
  SubmitButton,
  Error,
  StyledForm,
  Text,
  Label,
  Input,
};
