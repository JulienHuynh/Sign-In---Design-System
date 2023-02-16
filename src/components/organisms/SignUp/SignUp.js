import React, { useState } from 'react'
import Link from "../../atoms/Link/Link";

function SignUp (props) {
    return (
        <>
            <h1>Sign Up</h1>
            <Link linkClass="-regular" linkLabel="J'ai déjà un compte" setCurrentView={props.setCurrentView} view="SignIn" />
        </>
    )
}

export default SignUp