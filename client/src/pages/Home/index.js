import React, { useEffect } from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadUser } from "../../actions/authActions";

export const Home = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
    }, []);

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
                <p>This is a Boiler Plate React App with Redux and Authentication with JWT</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message>

        </div>
    )
};

export default Home;
