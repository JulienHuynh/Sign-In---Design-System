import './_signUp.scss'
import React, { useState } from 'react'
import Button from '../../Atomes/Button/Button'

function SignUp (props) {
    return (
        <>
            <h1>Sign Up</h1>
            <Button btnClass="-green" btnLabel="J'ai déjà un compte" setCurrentView={props.setCurrentView} view="SignIn" /* TODO mettre les props "setCurrentView" et "view" pour le composant link et les enlever du button */ />
        </>
    )
}

export default SignUp