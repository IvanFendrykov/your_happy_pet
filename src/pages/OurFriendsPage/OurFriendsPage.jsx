import { useEffect, useState } from 'react';
import { fetchOurFriendsApi } from '../../servises/fetchOurFriendApi';

import { Container, Title, List, ListElement, Link, Image, CartTitle, ElementContainer, CartList, H } from "./OurFriendsPage.styled";

const OurFriendsPage = () => {

    const reserveImg = 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000'

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

    return (
        <Container>
            <Title>Our friends</Title>
            <List>
                {ourFriends.map(ourFriend => (
                    <ListElement key={ourFriend._id}>
                        <Link href={ourFriend.url}>
                            <CartTitle>{ourFriend.title}</CartTitle>
                            <ElementContainer>
                                <Image src={ourFriend.imageUrl ? ourFriend.imageUrl : reserveImg} alt={ourFriend.title} />
                                <CartList>
                                    <li>
                                        <H>Time:</H>
                                        <span>{ourFriend.time ? ourFriend.time : reserveMessage}</span>
                                    </li>
                                    <li>
                                        <H>Adress:</H>
                                        <span>{ourFriend.address ? ourFriend.address : reserveMessage}</span>
                                    </li>
                                    <li>
                                        <H>Email:</H>
                                        <span>{ourFriend.email ? ourFriend.email : reserveMessage}</span>
                                    </li>
                                    <li>
                                        <H>Phone:</H>
                                        <span>{ourFriend.phone ? ourFriend.phone : reserveMessage}</span>
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
