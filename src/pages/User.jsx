import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Cards from "../components/Cards";
import UserInformation from "../components/UserInformation";

function User() {
    const { pathname } = useLocation();
    const [userInfo, setUserInfo] = useState();
    const [friendsData, setFriendsData] = useState();

    useEffect(() => {
        axios
            .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com${pathname}`)
            .then((result) => {
                setUserInfo(result.data);
                // console.log(result.data);
            });

        axios
            .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com${pathname}/friends/1/20`)
            .then((result) => {
                setFriendsData(result.data);
                // console.log(result.data);
            });
    }, [pathname]);

    console.log(pathname);

    return (
        <Container>
            {userInfo && <UserInformation userInfo={userInfo} />}
            <h2 id="friends">Friends:</h2>
            <Cards usersData={friendsData} />
        </Container>
    );
}

export default User;

const Container = styled.div`
    margin: 10px auto;
    padding: 10px;
    max-width: 1200px;
    border: 1px solid #cccccc;

    display: flex;
    flex-direction: column;

    #friends {
        margin: 50px 0 20px;
    }
`;
