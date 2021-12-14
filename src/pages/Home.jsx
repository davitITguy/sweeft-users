import styled from "styled-components";
import Cards from "../components/Cards";

function Home() {
    return (
        <Container>
            <Cards />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    max-width: 1200px;
    padding: 10px;
    margin: auto;
`;
