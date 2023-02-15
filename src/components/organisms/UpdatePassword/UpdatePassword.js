import React, { useState } from 'react'
import Link from "../../Atomes/Link/Link";

function UpdatePassword (props) {
    return (
        <>
            <h1>Update Password</h1>
            <Link linkLabel="Créer un compter" setCurrentView={props.setCurrentView} view="SignUp" />
            <Link linkLabel="Je me souviens de mon mdp" setCurrentView={props.setCurrentView} view="SignIn" />
        </>
    )
}

export default UpdatePassword