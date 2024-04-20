import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import { PatientsProvider } from './components/PatientContext.jsx'
import Authentication from './components/Authentication.jsx'
import App from './App.jsx'
import Connexion from './components/Connexion.jsx'
import Inscription from './components/Inscription.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import "./index.css"
import InformationPatient from "./components/InformationPatient.jsx";
import Menu from './components/Menu.jsx'
import Banner from './components/Banner.jsx'
import SuiviPatient from "./components/SuiviPatient.jsx";
import Infos from './components/Infos.jsx'
import Notifs from './components/Notifs.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <PatientsProvider>
        <Router>
            <Routes>
                <Route path='/patients' element={<App/>} errorElement={<ErrorPage/>}/>
                <Route path="/auth" element={<Authentication/>} errorElement={<ErrorPage/>}/>
                <Route path="/menu" element={<Menu/>} errorElement={<ErrorPage/>}/>
                <Route path="/connexion" element={<Connexion/>} errorElement={<ErrorPage/>}/>
                <Route path="/inscription" element={<Inscription/>} errorElement={<ErrorPage/>}/>
                <Route path="/patients/:patientId" element={< SuiviPatient/>} errorElement={<ErrorPage/>}/>
                <Route path="/info" element={<InformationPatient/>} errorElement={<ErrorPage/>}/>
                <Route path="/infos" element={<Infos/>}/>
                <Route path="/banner" element={<Banner/>} errorElement={<ErrorPage/>}/>
                <Route path="/patients/:patientId/info/:patientId" element={<InformationPatient/>} errorElement={<ErrorPage/>}/>
                <Route path="/notifs" element={<Notifs/>} errorElement={<ErrorPage/>}/>
            </Routes>
        </Router>
        </PatientsProvider>
    </React.StrictMode>
)
