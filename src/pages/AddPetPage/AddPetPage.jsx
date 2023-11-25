import { useState } from 'react';
import AddPetForm from '../../components/AddPetForm/AddPetForm';
import SellPetForm from '../../components/SellPetForm/SellPetForm';
import LostPetForm from '../../components/LostPetForm/LostPetForm';
import {
  MainForm,
  LabelBox,
  MainBox,
  CheckBox,
  ChekText,
  MainText,
  ListLines,
  ItemLines,
  SpanLine,
  NextBtn,
  BtnBox,
  BackBtn,
} from './AddPetPage.styled';
import GoodHandsForm from '../../components/GoodHandsForm/GoodHandsForm';
import symbolDefs from '../../images/symbol-defs.svg';
import { useNavigate } from 'react-router-dom';

const AddPetPage = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const [colors, setColors] = useState(['#54ADFF', '#CCE4FB', '#CCE4FB']);
  const changeColors = (newColor) => {
    const newColors = [...colors];

    newColors[0] = '#00C3AD';
    newColors[1] = newColor || '#54ADFF';

    if (newColors[1] === '#00C3AD') {
      newColors[2] = '#54ADFF';
    }

    setColors(newColors);
  };

  const handleChange = ({ target }) => {
    setValue(target.value);
    setActiveComponent(null);
  };

  const handleButtonClick = () => {
    const selectedComponent = components[value];
    if (selectedComponent) {
      setActiveComponent(selectedComponent);
      setValue('');
      changeColors();
    }
  };

  const components = {
    yourPet: (
      <AddPetForm
        changeColors={changeColors}
        setActiveComponent={setActiveComponent}
        setColors={setColors}
      />
    ),
    sell: (
      <SellPetForm
        changeColors={changeColors}
        setActiveComponent={setActiveComponent}
        setColors={setColors}
      />
    ),
    lost: (
      <LostPetForm
        changeColors={changeColors}
        setActiveComponent={setActiveComponent}
        setColors={setColors}
      />
    ),
    goodHands: (
      <GoodHandsForm
        changeColors={changeColors}
        setActiveComponent={setActiveComponent}
        setColors={setColors}
      />
    ),
  };
  const handleButtonClickBack = () => {
    navigate(-1);
  };

  return (
    <MainBox>
      <MainText>Add pet</MainText>
      <div>
        <ListLines>
          <ItemLines color={colors[0]}>
            Choose option
            <SpanLine></SpanLine>
          </ItemLines>

          <ItemLines color={colors[1]}>
            Personal details
            <SpanLine></SpanLine>
          </ItemLines>
          <ItemLines color={colors[2]}>
            More info
            <SpanLine></SpanLine>
          </ItemLines>
        </ListLines>
        {activeComponent ? (
          activeComponent
        ) : (
          <>
            <MainForm>
              <LabelBox>
                <CheckBox
                  id="pet"
                  type="radio"
                  name="radioChekBox"
                  value="yourPet"
                  onChange={handleChange}
                />

                <ChekText htmlFor="pet"> your pet</ChekText>

                <CheckBox
                  id="sell"
                  type="radio"
                  name="radioChekBox"
                  value="sell"
                  onChange={handleChange}
                />
                <ChekText htmlFor="sell">sell</ChekText>

                <CheckBox
                  id="lost"
                  type="radio"
                  name="radioChekBox"
                  value="lost"
                  onChange={handleChange}
                />

                <ChekText htmlFor="lost"> lost/found </ChekText>

                <CheckBox
                  id="hands"
                  type="radio"
                  name="radioChekBox"
                  value="goodHands"
                  onChange={handleChange}
                />

                <ChekText htmlFor="hands"> in good hands</ChekText>
              </LabelBox>
            </MainForm>
            <BtnBox>
              <NextBtn onClick={handleButtonClick}>
                Next
                <svg width="24" height="24">
                  <use href={symbolDefs + '#pawprint-1'} fill="white"></use>
                </svg>
              </NextBtn>
              <BackBtn onClick={handleButtonClickBack}>
                <svg width="24" height="24">
                  <use href={symbolDefs + '#arrow-left'} fill="white"></use>
                </svg>
                Cancel
              </BackBtn>
            </BtnBox>
          </>
        )}
      </div>
    </MainBox>
  );
};

export default AddPetPage;
