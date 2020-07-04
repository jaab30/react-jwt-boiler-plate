
import React from 'react';
import { Header } from 'semantic-ui-react';
import UserForm from "../../components/UserForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";

const Register = () => {

    const dispatch = useDispatch();

    const renderFormMessage = () => {
        return <>Already Registered ? <Link to="/login">Login</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(registerUser(formVal));
    }

    return (

        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'>
                Register
            </Header>
            <UserForm
                renderMessage={renderFormMessage}
                buttonText="Register"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}

export default Register;