import { useContext } from "react";
import styled from "styled-components";

import { usersContext } from "../context/usersContext";
import Cards from "../components/Cards";

function Home() {
    const { usersData } = useContext(usersContext);

    return <Container>{usersData.list && <Cards usersData={usersData} />}</Container>;
}

export default Home;

const Container = styled.div`
    max-width: 1200px;
    padding: 10px;
    margin: auto;
`;
