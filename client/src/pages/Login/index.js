
import React from "react";
import { Header } from "semantic-ui-react";
import UserForm from "../../components/UserForm";
import { Link } from "react-router-dom";

const Login = () => {

    const renderFormMessage = () => {
        return <>New to us ? <Link to="/register">Register</Link></>
    }

    return (
        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Log-in to your account
                </Header>
            <UserForm
                renderMessage={renderFormMessage}
                buttonText="Login"
            />
        </div>
    )
}

export default Login;