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
import { ArrowLeft } from '../../images/svg/svgIcons';

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
  const [title, setTitle] = useState('Add Pet');
  const handleChange = ({ target }) => {
    setValue(target.value);
    setActiveComponent(null);

    switch (target.value) {
      case 'yourPet':
        setTimeout(() => {
          setTitle('Your Pet');
        }, 10);
        break;
      case 'sell':
        setTimeout(() => {
          setTitle('Add pet for sale');
        }, 10);
        break;
      case 'lost':
        setTimeout(() => {
          setTitle('Add lost/faund pet');
        }, 10);
        break;
      case 'goodHands':
        setTimeout(() => {
          setTitle(' Add in good hands pet');
        }, 10);
        break;

      default:
        break;
    }
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
      <MainText>{title}</MainText>
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
                <ArrowLeft stroke="#54ADFF" />
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
