import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import { PatientsProvider } from './context/PatientContext.jsx'
import Authentication from './page/Authentication.jsx'
import Connexion from './page/Connexion.jsx'
import Inscription from './page/Inscription.jsx'
import ErrorPage from './page/ErrorPage.jsx'
import "./index.css"
import InformationPatient from "./page/InformationPatient.jsx";
import Menu from './components/Menu.jsx'
import Banner from './components/Banner.jsx'
import SuiviPatient from "./page/SuiviPatient.jsx";
import Infos from './page/Infos.jsx'
import Patients from "./components/Patients.jsx";
import App from "./App.jsx";
import Notifs from './page/Notifs.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <PatientsProvider>
        <Router>
            <Routes>
                <Route path='/' element={<App/>} errorElement={<ErrorPage/>}/>
                <Route path='/patients' element={<Patients/>} errorElement={<ErrorPage/>}/>
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