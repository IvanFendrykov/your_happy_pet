import { useState } from 'react'
import PetsList from '../../components/PetsList/PetsList'
import { SaveButton, EditProfileButton, H2, Label, ListItem, LogoutButton, Section, Span, StyledList, UserCardWrapper, UserProfileImage, Wrapper } from './UserPage.styled'

const user = {
    name: "fakeName",
    email: 'fakeEmail',
    bday: '11.11',
    phone: '111-111-111',
    city: 'Kyiv'
}

const pets = [{
    id: 2,
    imageUrl: 'https://placekitten.com/200/200',
    name: 'Fluffy',
    dateOfBirth: '2020-01-01',
    type: 'Cat',
    comments: 'A cute and fluffy kitty.',
}, {
    id: 1,
    imageUrl: 'https://placekitten.com/200/200',
    name: 'Fluffy',
    dateOfBirth: '2020-01-01',
    type: 'Cat',
    comments: 'A cute and fluffy kitty.',
}]





function UserPage() {
    const [clicked, setClicked] = useState(false)
    const [currentUser, setCurrentUser] = useState(user)
    const [currentName, setCurrentName] = useState(currentUser.name)
    const [currentEmail, setCurrentEmail] = useState(currentUser.email)
    const [currentBday, setCurrentBday] = useState(currentUser.bday)
    const [currentPhone, setCurrentPhone] = useState(currentUser.phone)
    const [currentCity, setCurrentCity] = useState(currentUser.city)

    const toggleForm = (e) => {
e.preventDefault()
        setClicked(!clicked)
        console.log(clicked);
    }
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
                                <Span type="text" name="name" placeholder={currentUser.name} disabled={!clicked}></Span>
                            </ListItem>
                            <ListItem>
                                <Label>Email:</Label>
                                <Span type="email" name="email" placeholder={currentUser.email} disabled={!clicked}></Span>
                            </ListItem>
                            <ListItem>
                                <Label>Birthday:</Label>
                                <Span type="text" name="birthday" placeholder={currentUser.bday} disabled={!clicked}></Span>
                            </ListItem>
                            <ListItem>
                                <Label>Phone:</Label>
                                <Span type="text" name="phone" placeholder={currentUser.phone} disabled={!clicked}></Span>
                            </ListItem>
                            <ListItem>
                                <Label>City:</Label>
                                <Span type="text" name="city" placeholder={currentUser.city} disabled={!clicked}></Span>
                            </ListItem>
                        </StyledList>
                        {clicked ? <SaveButton>save</SaveButton> : <LogoutButton>logout</LogoutButton>}
                        <EditProfileButton onClick={toggleForm}>Edit</EditProfileButton>
                    </UserCardWrapper>
                </Section>
                <Section>
                    <H2>My pets:</H2>
                    <PetsList pets={pets} />
                </Section>
            </Wrapper>
        </>
    )
}

export default UserPage