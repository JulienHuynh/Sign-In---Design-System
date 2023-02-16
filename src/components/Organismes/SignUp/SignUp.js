import React, { useState } from 'react'
import Button from '../../Atomes/Button/Button'
import Link from "../../Atomes/Link/Link";

function SignUp (props) {
    return (
        <>
            <h1>Sign Up</h1>
            <Link linkLabel="J'ai déjà un compte" setCurrentView={props.setCurrentView} view="SignIn" />
        </>
    )
}

export default SignUp