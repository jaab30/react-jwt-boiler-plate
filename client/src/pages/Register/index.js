
import React from 'react';
import { Header } from 'semantic-ui-react';
import UserForm from "../../components/UserForm";
import { Link } from "react-router-dom";

const Register = () => {

    const renderFormMessage = () => {
        return <>Already Registered ? <Link to="/login">Login</Link></>
    }
    return (

        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Register
            </Header>
            <UserForm
                renderMessage={renderFormMessage}
                buttonText="Register"
            />
        </div>
    )
}

export default Register;