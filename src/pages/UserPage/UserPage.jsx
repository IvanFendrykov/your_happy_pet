import PetsList from '../../components/PetsList/PetsList'
import { H2, Label, ListItem, Section, Span, StyledList, UserCardWrapper, UserProfileImage } from './UserPage.styled'

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
    return (
        <>
            <Section>
                <H2>My information:</H2>
                <UserCardWrapper>
                    <UserProfileImage />
                    <StyledList>
                        <ListItem>
                            <Label>Name:</Label>
                            <Span>{user.name}</Span>
                        </ListItem>
                        <ListItem>
                            <Label>Email:</Label>
                            <Span>{user.email}</Span>
                        </ListItem>
                        <ListItem>
                            <Label>Birthday:</Label>
                            <Span>{user.bday}</Span>
                        </ListItem>
                        <ListItem>
                            <Label>Phone:</Label>
                            <Span>{user.phone}</Span>
                        </ListItem>
                        <ListItem>
                            <Label>City:</Label>
                            <Span>{user.city}</Span>
                        </ListItem>
                    </StyledList>
                    <button>logout</button>
                </UserCardWrapper>
            </Section>
            <Section>
                <H2>My pets:</H2>
                <PetsList pets={pets} />
            </Section>
        </>
    )
}

export default UserPage