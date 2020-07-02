import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";

export const Home = () => {
    return (
        <div>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Home</Header>
                <p>This is a Boiler Plate React App with Redux and Authentication with JWT</p>
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Message>

        </div>
    )
};

export default Home;
