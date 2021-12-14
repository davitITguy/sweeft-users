import styled from "styled-components";
import Cards from "../components/Cards";
import UserInformation from "../components/UserInformation";

function User() {
    return (
        <Container>
            <UserInformation />
            <h2 id="friends">Friends:</h2>
            <Cards />
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
