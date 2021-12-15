import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import useFetch from "../hook/useFetch";
import Cards from "../components/Cards";
import UserInformation from "../components/UserInformation";

function User() {
    const { pathname } = useLocation();
    const [pageNumber, setPageNumber] = useState(1);
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        axios
            .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com${pathname}`)
            .then((result) => {
                setUserInfo(result.data);
                // console.log(result.data);
            });
    }, [pathname]);

    const { loading, error, list } = useFetch(pageNumber, 20, pathname);

    console.log("user");

    return (
        <Container>
            {userInfo && <UserInformation userInfo={userInfo} />}
            <h2 id="friends">Friends:</h2>
            {list && <Cards usersData={list} setPageNumber={setPageNumber} loading={loading} error={error} />}
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
