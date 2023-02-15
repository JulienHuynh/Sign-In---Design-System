import './_updatePassword.scss'
import React, { useState } from 'react'
import Button from '../../Atomes/Button/Button'

function UpdatePassword (props) {
    return (
        <>
            <h1>Update Password</h1>
            <Button btnClass="-purple" btnLabel="Créer un compter" setCurrentView={props.setCurrentView} view="SignUp" /* TODO mettre les props "setCurrentView" et "view" pour le composant link et les enlever du button */ />
            <Button btnClass="-green" btnLabel="Je me souviens de mon mdp" setCurrentView={props.setCurrentView} view="SignIn" /* TODO mettre les props "setCurrentView" et "view" pour le composant link et les enlever du button */ />
        </>
    )
}

export default UpdatePassword