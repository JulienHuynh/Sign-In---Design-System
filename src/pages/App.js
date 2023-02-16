import React, { useState } from 'react'
import SignForm from '../components/organisms/SignForm/SignForm';
import SignUp from '../components/organisms/SignUp/SignUp';
import UpdatePassword from '../components/organisms/UpdatePassword/UpdatePassword';

function App() {
    const [currentView, setCurrentView] = useState('SignForm')

    return (
        <div className="App">
            { currentView === 'SignForm' && (
                <SignForm currentView={currentView} setCurrentView={setCurrentView} />
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
