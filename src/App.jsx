import { useState } from 'react';
import {CookiesProvider, useCookies} from "react-cookie";

import Authentication from './components/Authentication';
import Connexion from './components/Connexion';
import Patients from './components/Patients';
import HandleLoginContext from "./components/HandleLoginContext.jsx";

function App() {
    const [cookies, setCookie] = useCookies(['data'])
    const [showLogin, setShowLogin] = useState(false); // État pour afficher la page de connexion

    function handleLogin(data) {
        console.log("Data" + data.access_token)
        setCookie('data', data, { path: '/' , expires:data.expires},)
    }

    // Fonction pour basculer entre la page d'authentification et la page de connexion
    function toggleShowLogin() {
        setShowLogin(!showLogin);
    }

    return (
        <CookiesProvider>
            <HandleLoginContext.Provider value={handleLogin}>
                <div>
                    {cookies.data ? (
                        <Patients token={cookies.data} />
                    ) : showLogin ? (
                        <Connexion onLogin={handleLogin} />
                    ) : (
                        <Authentication onLogin={toggleShowLogin} />
                    )}
                </div>
            </HandleLoginContext.Provider>
        </CookiesProvider>
    );
}

export default App;