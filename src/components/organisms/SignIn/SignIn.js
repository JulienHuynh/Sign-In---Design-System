import React, { useState } from 'react'
import Link from "../../atoms/Link/Link";

function SignIn (props) {

    return (
        <>
            <h1>Sign In</h1>
            <Link linkLabel="Crée un compte" setCurrentView={props.setCurrentView} view="SignUp" />
            <Link linkLabel="Mot de passe oublié" setCurrentView={props.setCurrentView} view="UpdatePassword" />
        </>
    )
}

export default SignIn