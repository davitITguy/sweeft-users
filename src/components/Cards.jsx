import styled from "styled-components";

import UserCard from "./UserCard";

function Cards({ usersData }) {
    return (
        <Container>
            {usersData && usersData.list.map((user) => <UserCard key={user.id} user={user} />)}
        </Container>
    );
}

export default Cards;

const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 10px 10px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
