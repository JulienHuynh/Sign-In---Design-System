import React, { useState } from 'react'
import Link from "../../atoms/Link/Link";
import {FormInput} from "../../molecules/FormInput/FormInput";
import PropTypes from "prop-types";

export const SignForm = ({ title, action, ...props }) => {

    return (
        <div className="sign-form">
            <h1>{title}</h1>
            <form action={action} method='POST' className="form-section">
                <FormInput {...props}></FormInput>
                <FormInput {...props}></FormInput>
            </form>
            <Link linkClass="-regular" linkLabel="Créer un compte" setCurrentView={props.setCurrentView} view="SignUp" />
            <Link linkClass="-regular" linkLabel="Mot de passe oublié" setCurrentView={props.setCurrentView} view="UpdatePassword" />
        </div>
    );
}

SignForm.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
};

SignForm.defaultProps = {
    title: 'Title form'
};
