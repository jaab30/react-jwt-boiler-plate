import React from 'react';
import { Header, Message } from "semantic-ui-react";


export const UserDashboard = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> User Dashboard </Header>
                <p>This is a Protected Route</p>
                <p>Welcome User...</p>
            </Message>
        </>
    )
}

export default UserDashboard;
