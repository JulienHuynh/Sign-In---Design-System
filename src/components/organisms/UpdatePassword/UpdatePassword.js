import React, { useState } from 'react'
import Link from "../../atoms/Link/Link";

function UpdatePassword (props) {
    return (
        <>
            <h1>Update Password</h1>
            <Link linkClass="-regular" linkLabel="Créer un compte" setCurrentView={props.setCurrentView} view="SignUp" />
            <Link linkClass="-regular" linkLabel="Je me souviens de mon mdp" setCurrentView={props.setCurrentView} view="SignIn" />
        </>
    )
}

export default UpdatePassword