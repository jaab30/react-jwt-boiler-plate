
import React from 'react';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from "redux-form";

const UserForm = (props) => {

    const onSubmit = (values) => {
        console.log(values);

    }

    return (
        <>
            <Form onSubmit={props.handleSubmit(onSubmit)} size='large'>
                <Segment>
                    <Field
                        name="email"
                        component={renderInput}
                        label="E-mail address"
                    />
                    <Field
                        name="password"
                        component={renderInput}
                        label="Password"
                    />
                    <Button secondary fluid size='large'>
                        {props.buttonText}
                    </Button>
                </Segment>
            </Form>
            <Message>
                {props.renderMessage()}
            </Message>
        </>
    )
}
const renderInput = ({ input, label }) => {

    return (

        <div className="field">
            <div className="ui fluid left icon input">
                <input {...input} autoComplete="off" placeholder={label} />
                <i aria-hidden="true" className={`${input.name === "email" ? "user" : "lock"} icon`}></i>
            </div>
        </div>

    )
}


export default reduxForm({
    form: "userform"
})(UserForm)