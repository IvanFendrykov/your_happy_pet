import styled from 'styled-components';

export const CheckBoxWrap = styled.div`
  display: flex;
  gap: 16px;
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

export const LabelFileWrapperImg = styled.label`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  margin-bottom: 25px;
  flex-direction: column;
  @media (max-width: 750px){
    width: 270px;
    flex-direction: row;
    align-items: center;
    justify-content: normal;
  }
`;

export const FileWrapperImg = styled.div`
  width: 182px;
  height: 182px;
  background-color: #cce4fb;
  border-radius: 25px;
  margin-top: 10px;
  // margin-left: 14px;
  position: relative;

  @media (max-width: 430px) {
    width: 112px;
    height: 112px
  }
  @media (max-width: 750px){
    margin-left: 10px;
  }
`;


export const DivContainer = styled.div`
  display: flex;
  width: 650px;
  // flex-direction: column;
  // justify-content:space-evenly;

  @media (max-width: 750px){
    display: block;
    width: 100%;
  }
`;

export const FlexContainer = styled.div`
  width: 50%;
  @media (max-width: 750px){
    width: 100%;
  }
`;


export const InputAddInfo = styled.input`
color: var(--black, #111);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
width: -webkit-fill-available;
@media (min-width: 560px ){ //430
  width: 320px;
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



