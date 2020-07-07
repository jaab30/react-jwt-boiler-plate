import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }

    return (
        <div>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Home</Header>
                <p style={{ marginBottom: "5px" }}>This is a Boiler Plate MERN application with authentication using JSON Web Tokens.</p>
                <p style={{ margin: "5px 0 25px" }}>This APP was design to be used as a starting point for any developer looking to integrate authentication with a MERN application.</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message>

        </div>
    )
};

export default Home;
