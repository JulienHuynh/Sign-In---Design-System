import React, { useState } from 'react'
import Link from "../../atoms/Link/Link";

function UpdatePassword (props) {
    return (
        <>
            <h1>Update Password</h1>
            <Link linkClass="-regular" linkLabel="Créer un compter" setCurrentView={props.setCurrentView} view="SignUp" />
            <Link linkClass="-regular" linkLabel="Je me souviens de mon mdp" setCurrentView={props.setCurrentView} view="SignForm" />
        </>
    )
}

export default UpdatePassword