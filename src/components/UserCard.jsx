import { Link } from "react-router-dom";
import styled from "styled-components";

function UserCard() {
    return (
        <Container as={Link} to="/user/id">
            <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="profile" />
            <div>
                <h3>name</h3>
                <p>profesion</p>
            </div>
        </Container>
    );
}

export default UserCard;

const Container = styled.div`
    width: 100%;
    text-decoration: none;
    border: 1px solid #cccccc;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    img {
        width: 100%;
    }
    div {
        width: 100%;
        padding: 0 10px;
        color: black;
    }
`;
