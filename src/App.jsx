import './App.css'

import {CookiesProvider, useCookies} from "react-cookie";
import Connexion from "./components/Connexion.jsx";
import Patients from "./components/Patients.jsx";


function App() {
    const [cookies, setCookie] = useCookies(['data'])

    function handleLogin(data) {
        setCookie('data', data, { path: '/' , expires:data.expires},)
    }

    return (
        <CookiesProvider>
            <div>{cookies.data ? <Patients token={cookies.data} /> : <Connexion onLogin={handleLogin} />}</div>
        </CookiesProvider>
    )
}

export default App;