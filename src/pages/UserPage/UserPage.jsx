import { useState } from 'react';
import PetsList from '../../components/PetsList/PetsList';
import {
  SaveButton,
  EditProfileButton,
  H2,
  Label,
  ListItem,
  LogoutButton,
  Section,
  Span,
  StyledList,
  UserCardWrapper,
  UserProfileImage,
  Wrapper,
} from './UserPage.styled';
import { ReactComponent as Edit } from '../../images/svg/edit.svg';
import { ReactComponent as CrossSmall } from '../../images/svg/cross-small.svg';
import { ReactComponent as Logout } from '../../images/svg/logout.svg';

const user = {
  name: 'fakeName',
  email: 'fakeEmail',
  bday: '11.11',
  phone: '111-111-111',
  city: 'Kyiv',
};

const pets = [
  {
    id: 2,
    imageUrl: 'https://placekitten.com/200/200',
    name: 'Fluffy',
    dateOfBirth: '2020-01-01',
    type: 'Cat',
    comments: 'A cute and fluffy kitty.',
  },
  {
    id: 1,
    imageUrl: 'https://placekitten.com/200/210',
    name: 'Fluffy',
    dateOfBirth: '2020-01-01',
    type: 'Cat',
    comments: 'A cute and fluffy kitty.',
  },
];

function UserPage() {
  const [clicked, setClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState(user); //it is temporary, need to send this obj on back
  const [currentName, setCurrentName] = useState(currentUser.name);
  const [currentEmail, setCurrentEmail] = useState(currentUser.email);
  const [currentBday, setCurrentBday] = useState(currentUser.bday);
  const [currentPhone, setCurrentPhone] = useState(currentUser.phone);
  const [currentCity, setCurrentCity] = useState(currentUser.city);

  const toggleForm = (e) => {
    e.preventDefault();
    setClicked(!clicked);
    console.log(clicked);
  };
  const onUserNameChange = (e) => {
    setCurrentName(e.target.value);
  };
  const onUserEmailChange = (e) => {
    setCurrentEmail(e.target.value);
  };
  const onUserBdayChange = (e) => {
    setCurrentBday(e.target.value);
  };
  const onUserPhoneChange = (e) => {
    setCurrentPhone(e.target.value);
  };
  const onUserCityChange = (e) => {
    setCurrentCity(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const editedUser = {
      name: currentName,
      email: currentEmail,
      bday: currentBday,
      phone: currentPhone,
      city: currentCity,
    };

    console.log(editedUser);
    setCurrentUser(editedUser);
    setClicked(false);
  };
  return (
    <>
      <Wrapper>
        <Section>
          <H2>My information:</H2>
          <UserCardWrapper>
            <UserProfileImage />
            <StyledList>
              <ListItem>
                <Label>Name:</Label>
                <Span
                  type="text"
                  name="name"
                  value={currentName}
                  disabled={!clicked}
                  onChange={onUserNameChange}
                ></Span>
              </ListItem>
              <ListItem>
                <Label>Email:</Label>
                <Span
                  type="email"
                  name="email"
                  value={currentEmail}
                  disabled={!clicked}
                  onChange={onUserEmailChange}
                ></Span>
              </ListItem>
              <ListItem>
                <Label>Birthday:</Label>
                <Span
                  type="text"
                  name="birthday"
                  value={currentBday}
                  disabled={!clicked}
                  onChange={onUserBdayChange}
                ></Span>
              </ListItem>
              <ListItem>
                <Label>Phone:</Label>
                <Span
                  type="text"
                  name="phone"
                  value={currentPhone}
                  disabled={!clicked}
                  onChange={onUserPhoneChange}
                ></Span>
              </ListItem>
              <ListItem>
                <Label>City:</Label>
                <Span
                  type="text"
                  name="city"
                  value={currentCity}
                  disabled={!clicked}
                  onChange={onUserCityChange}
                ></Span>
              </ListItem>
            </StyledList>
            {clicked ? (
              <SaveButton onClick={submitForm}>Save</SaveButton>
            ) : (
              <LogoutButton>
                <Logout style={{ stroke: '#54ADFF', marginRight: '12px' }} />{' '}
                Log Out
              </LogoutButton>
            )}
            {clicked ? (
              <EditProfileButton onClick={toggleForm}>
                <CrossSmall style={{ stroke: '#54ADFF' }} />
              </EditProfileButton>
            ) : (
              <EditProfileButton onClick={toggleForm}>
                <Edit style={{ stroke: '#54ADFF' }} />
              </EditProfileButton>
            )}
          </UserCardWrapper>
        </Section>
        <Section>
          <H2>My pets:</H2>
          <PetsList pets={pets} />
        </Section>
      </Wrapper>
    </>
  );
}

export default UserPage;
