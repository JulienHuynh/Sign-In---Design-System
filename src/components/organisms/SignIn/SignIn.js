import React, { useState } from 'react'
import Link from "../../atoms/Link/Link";
import {FormInput} from "../../molecules/FormInput/FormInput";
import Button from "../../atoms/Button/Button";

function Signin(props) {

    return (
        <div className="sign-form">
            <h1>WELCOME BACK</h1>
            <form action="" method="" className="form-section">
                <FormInput placeholder="Votre email..." label="Email"></FormInput>
                <FormInput placeholder="Votre mot de passe..." label="Mot de passe"></FormInput>
            </form>
            <div className="sign-connect">
                <Button label="Se connecter" variant="primary" size="xl"></Button>
                <Link linkClass="-regular" linkLabel="Créer un compte" setCurrentView={props.setCurrentView} view="SignUp" />
                <Link linkClass="-regular" linkLabel="Mot de passe oublié" setCurrentView={props.setCurrentView} view="UpdatePassword" />
            </div>
        </div>
    );
}

export default Signin;