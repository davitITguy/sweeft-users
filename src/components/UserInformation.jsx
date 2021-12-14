import styled from "styled-components";

function UserInformation() {
    return (
        <Container>
            <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" alt="profile" />
            <fieldset id="fieldset1">
                <legend>Info</legend>
                <div>
                    <h3>Dr. Angie Olson</h3>
                    <p>Customer Division Facilitator</p>
                </div>
                <div>
                    <p>
                        <span>Email:</span> Adriana87@hotmail.com
                    </p>
                    <p>
                        <span>Ip Address:</span> 205.44.63.69
                    </p>
                    <p>
                        <span>Ip Address:</span> 205.44.63.69
                    </p>
                    <p>
                        <span>Job Area:</span> Metrics
                    </p>
                    <p>
                        <span>Job Type:</span> Facilitator
                    </p>
                </div>
            </fieldset>
            <fieldset id="fieldset2">
                <legend>Address</legend>
                <h4>Feest Inc LLC</h4>
                <p>
                    <span>City:</span> Lake Dewayneshire
                </p>
                <p>
                    <span>Country:</span> Lao People's Democratic Republic
                </p>
                <p>
                    <span>State:</span> Alaska
                </p>
                <p>
                    <span>Street Address:</span> 218 Hilll Viaduct
                </p>
                <p>
                    <span>ZIP:</span> 64894
                </p>
            </fieldset>
        </Container>
    );
}

export default UserInformation;

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    img {
        width: 265px;
        height: 250px;
    }

    fieldset {
        text-align: left;
        padding: 10px;

        span {
            text-decoration: underline;
        }
    }
    #fieldset1 {
        width: 100%;
        margin: 0 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        img {
            width: 100%;
        }
        #fieldset1 {
            margin: 0;
        }
    }
`;
