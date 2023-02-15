import React, { useState } from 'react'
import SignIn from '../components/organisms/SignIn/SignIn';
import SignUp from '../components/organisms/SignUp/SignUp';
import UpdatePassword from '../components/organisms/UpdatePassword/UpdatePassword';

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
