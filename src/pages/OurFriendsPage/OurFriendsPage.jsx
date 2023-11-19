import { useEffect, useState } from 'react';
import { fetchOurFriendsApi } from '../../servises/fetchOurFriendApi';

const OurFriendsPage = () => {

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
        <div>
            <h1>Our friends</h1>
            <ul>
                {ourFriends.map(ourFriend => (
                    <li key={ourFriend.title}>
                        <h2>{ourFriend.title}</h2>
                        <div>
                            <img src={ourFriend.img} alt={ourFriend.title} />
                            <ul>
                                <li>
                                    <h3>Time:</h3>
                                    <span>{ourFriend.time}</span>
                                </li>
                                <li>
                                    <h3>Adress:</h3>
                                    <span>{ourFriend.adress}</span>
                                </li>
                                <li>
                                    <h3>Email:</h3>
                                    <span>{ourFriend.email}</span>
                                </li>
                                <li>
                                    <h3>Phone:</h3>
                                    <span>{ourFriend.phone}</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OurFriendsPage;
