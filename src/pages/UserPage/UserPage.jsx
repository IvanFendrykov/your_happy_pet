import { useEffect, useState } from 'react';

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
  EditButton,
  EditExit,
  SvgIcon,
  FileWrapper,
  UserAvatar,
} from './UserPage.styled';
import { ReactComponent as Edit } from '../../images/svg/edit.svg';
import { ReactComponent as CrossSmall } from '../../images/svg/cross-small.svg';
import { ReactComponent as Logout } from '../../images/svg/logout.svg';
import { ReactComponent as PhotoDef } from '../../images/svg/photo-default.svg';
import { ReactComponent as Camera } from '../../images/svg/camera.svg';
import { ReactComponent as Check } from '../../images/svg/check.svg';
import { ReactComponent as X } from '../../images/svg/x.svg';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { InputFile } from '../../components/AddPetForm/AddPetForm.styled';
import symbolDefs from '../../images/symbol-defs.svg';
import Backdrop from '../../components/Backdrop/Backdrop';
import ModalApproveAction from '../../components/ModalApproveAction/ModalApproveAction';

// const user = {
//   name: 'fakeName',
//   email: 'fakeEmail',
//   bday: '11.11',
//   phone: '111-111-111',
//   city: 'Kyiv',
// };

// const pets = [
//   {
//     id: 2,
//     imageUrl: 'https://placekitten.com/200/200',
//     name: 'Fluffy',
//     dateOfBirth: '2020-01-01',
//     type: 'Cat',
//     comments: 'A cute and fluffy kitty.',
//   },
//   {
//     id: 1,
//     imageUrl: 'https://placekitten.com/200/210',
//     name: 'Fluffy',
//     dateOfBirth: '2020-01-01',
//     type: 'Cat',
//     comments: 'A cute and fluffy kitty.',
//   },
// ];

function UserPage() {
  const [clicked, setClicked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentBday, setCurrentBday] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [image, setSelectedImage] = useState(null);
  const [fileImage, setFileImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [pets, setPets] = useState(null)

  const [showModal, setShowModal] = useState(null)

  const token = useSelector((state) => state.auth.token);

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
  const submitForm = async (e) => {
    e.preventDefault();
    const editedUserFormData = new FormData();

    editedUserFormData.append('username', currentName);
    editedUserFormData.append('email', currentEmail);
    editedUserFormData.append('birthDay', currentBday);
    editedUserFormData.append('phone', currentPhone);
    editedUserFormData.append('city', currentCity);
    if (image) {
      editedUserFormData.append('image', fileImage);
    }



    const response = await axios.patch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/current`,
      editedUserFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setClicked(false);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  };
  const handleEditExit = (e) => {
    e.preventDefault();
    setSelectedImage(null)
    setFileImage(null)
    setEdit(false);
  };
  const onDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/myPet/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPets((prevPets) => prevPets.filter((pet) => pet._id !== id));
      console.log(pets)
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/myPet`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },);
        setPets(response.data.data.response.docs);
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    };
    const getUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/current`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },);
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    };

    const fetchUserAndSetCurrentUser = async () => {
      const user = await getUser();
      if (user) {
        const { username, email, birthDay, phone, city, profilePic } = user;

        setCurrentName(username || '');
        setCurrentEmail(email || '');
        setCurrentPhone(phone || '');
        setCurrentCity(city || '');
        setImageUrl(profilePic || '')

        const birthDate = new Date(birthDay);
        const formattedBday = birthDate.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        });

        setCurrentBday(formattedBday || '');
      }
    };

    fetchUserAndSetCurrentUser();
    getPets();

  }, [token]);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const urlImage = URL.createObjectURL(file);
      setSelectedImage(urlImage);
      setFileImage(file);
    }
  };

  const toggleLogoutModal = () => {
    console.log("first")
  }

  return (
    <>
      <Wrapper>
        <Section>
          <H2>My information:</H2>

          <UserCardWrapper>
            <UserProfileImage>

              {imageUrl ? <UserAvatar src={imageUrl} alt="User picture" /> : <PhotoDef />}


              {clicked &&
                (edit ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      position: 'absolute',
                      bottom: '-36px',
                      left: '20px',
                    }}
                  >
                    <FileWrapper>
                      {image ? (
                        <img
                          src={image}
                          alt="Selected"
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '25px',
                          }}
                        />
                      ) : (
                        <>
                          <InputFile
                            type="file"
                            onChange={handleFileChange}
                            name="image"
                          />
                          <SvgIcon width="24" height="24">
                            <use href={symbolDefs + '#plus'} fill="white"></use>
                          </SvgIcon>
                        </>
                      )}
                    </FileWrapper >
                    <EditExit onClick={handleEditExit}>
                      Cancel photo  <X />
                    </EditExit>
                  </div>
                ) : (
                  <EditButton onClick={handleEdit} type="button">

                    <Camera />

                    <span>Edit photo</span>
                  </EditButton>
                ))}
            </UserProfileImage>
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
              <LogoutButton type='button' onClick={() => setShowModal(!showModal)}>
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
          {pets ? <PetsList pets={pets} onDelete={onDelete} /> : <H2>You didnt added any pets!</H2>}
        </Section>
        {showModal && (
          <Backdrop closeModal={() => setShowModal(!showModal)}>
            <ModalApproveAction closeModal={() => setShowModal(!showModal)} />
          </Backdrop>
        )}
      </Wrapper>
    </>
  );
}

export default UserPage;
