import React, { useState } from 'react'
import Link from "../../atoms/Link/Link";

function SignIn (props) {

    return (
        <React.Fragment>
            <h1>Sign In</h1>
            <Link linkClass="-regular" linkLabel="Crée un compte" setCurrentView={props.setCurrentView} view="SignUp" />
            <Link linkClass="-regular" linkLabel="Mot de passe oublié" setCurrentView={props.setCurrentView} view="UpdatePassword" />
        </React.Fragment>
    )
}

export default SignIn