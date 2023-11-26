import { useEffect, useState } from 'react';
import { fetchOurFriendsApi } from '../../servises/fetchOurFriendApi';

import {
    Container,
    Title,
    List,
    ListElement,
    Link,
    Image,
    CartTitle,
    ElementContainer,
    CartList,
    H,
    Url,
    TimeList,
    BTN
} from "./OurFriendsPage.styled";

const OurFriendsPage = () => {

    const reserveImg = 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000';

    const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    const reserveMessage = 'Check details on website';

    const [ourFriends, setOurFriends] = useState([]);

    useEffect(() => {
        const fetchOurFriends = async () => {
            try {
                const response = await fetchOurFriendsApi();
                setOurFriends(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchOurFriends();
    }, []);

    const [modalStates, setModalStates] = useState(ourFriends.map(() => false));

    const btnChange = (index) => {
        setModalStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    }

    return (
        <Container>
            <Title>Our friends</Title>
            <List>
                {ourFriends.map((ourFriend, index) => (
                    <ListElement key={ourFriend._id}>
                        <Link href={ourFriend.url}>
                            <CartTitle href={ourFriend.url}>{ourFriend.title}</CartTitle>
                            <ElementContainer>
                                <Image src={ourFriend.imageUrl ? ourFriend.imageUrl : reserveImg} alt={ourFriend.title} />
                                <CartList>
                                    <li>
                                        <H>Time:</H>
                                        <BTN onClick={() => btnChange(index)}>{!modalStates[index] ? 'Show' : 'Hide'}</BTN>
                                        {modalStates[index] ? <TimeList>
                                            {Array.isArray(ourFriend.workDays) ? (
                                                daysOfWeek.map((day, i) => {
                                                    const workDay = ourFriend.workDays[i];
                                                    if (workDay && workDay.isOpen !== undefined && workDay.from && workDay.to) {
                                                        return (
                                                            <li key={i}>
                                                                <strong>{day}: </strong>
                                                                {workDay.isOpen ? (
                                                                    <span>
                                                                        Open from {workDay.from} to {workDay.to}
                                                                    </span>
                                                                ) : (
                                                                    <span>Closed</span>
                                                                )}
                                                            </li>
                                                        );
                                                    }
                                                    return null;
                                                })
                                            ) : (
                                                <li>{reserveMessage}</li>
                                            )}
                                        </TimeList> : null}
                                    </li>
                                    <li>
                                        <H>Adress:</H>
                                        <Url href={ourFriend.addressUrl ? ourFriend.addressUrl : ourFriend.url}>{ourFriend.address ? ourFriend.address : reserveMessage}</Url>
                                    </li>
                                    <li>
                                        <H>Email:</H>
                                        <Url href={ourFriend.email ? `mailto:${ourFriend.email}` : ourFriend.url} target="_blank" rel="noopener noreferrer">{ourFriend.email ? ourFriend.email : reserveMessage}</Url>
                                    </li>
                                    <li>
                                        <H>Phone:</H>
                                        <Url href={ourFriend.phone ? `tel:${ourFriend.phone}` : ourFriend.url} target="_blank" rel="noopener noreferrer">{ourFriend.phone ? ourFriend.phone : reserveMessage}</Url>
                                    </li>
                                </CartList>
                            </ElementContainer>
                        </Link>
                    </ListElement>
                ))}
            </List>
        </Container>
    );
}

export default OurFriendsPage;
