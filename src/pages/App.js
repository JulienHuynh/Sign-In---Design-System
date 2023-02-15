import React, { useState } from 'react'
import SignIn from '../components/Organismes/SignIn/SignIn';
import SignUp from '../components/Organismes/SignUp/SignUp';
import UpdatePassword from '../components/Organismes/UpdatePassword/UpdatePassword';

function App() {
    const [currentView, setCurrentView] = useState('SignIn')

    return (
        <div className="App">
            { currentView === 'SignIn' && (
                <SignIn currentView={currentView} setCurrentView={setCurrentView} />
            )}
            { currentView === 'SignUp' && (
                <SignUp setCurrentView={setCurrentView} />
            )}
            { currentView === 'UpdatePassword' && (
                <UpdatePassword setCurrentView={setCurrentView} />
            )}
        </div>
    );
}

export default App;
