
import React from "react";
import { Header } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import UserForm from "../../components/UserForm";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();

    const renderFormMessage = () => {
        return <>New to us ? <Link to="/register">Register</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(loginUser(formVal));
    }

    return (
        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Login to your account
                </Header>
            <UserForm
                renderMessage={renderFormMessage}
                buttonText="Login"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}

export default Login;