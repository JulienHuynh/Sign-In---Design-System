import './_signIn.scss'
import React, { useState } from 'react'
import Button from '../../Atomes/Button/Button'

function SignIn (props) {

    return (
        <>
            <h1>Sign In</h1>
            <Button btnClass="-purple" btnLabel="Crée un compte" setCurrentView={props.setCurrentView} view="SignUp" /* TODO mettre les props "setCurrentView" et "view" pour le composant link et les enlever du button */ />
            <Button btnClass="-red" btnLabel="Mot de passe oublié" setCurrentView={props.setCurrentView} view="UpdatePassword" /* TODO mettre les props "setCurrentView" et "view" pour le composant link et les enlever du button */ />
        </>
    )
}

export default SignIn