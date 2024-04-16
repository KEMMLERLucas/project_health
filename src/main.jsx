import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Authentication from './components/Authentication.jsx'
import App from './App.jsx'
import Connexion from './components/Connexion.jsx'
import Inscription from './components/Inscription.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import "./index.css"
import InformationPatient from "./components/InformationPatient.jsx";
import PatientPreview from './components/PatientPreview.jsx'
import Menu from './components/Menu.jsx'
import Banner from './components/Banner.jsx'
import SuiviPatient from "./components/SuiviPatient.jsx";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/patients' element={<App />} errorElement={<ErrorPage />} />
        <Route path="/auth" element={<Authentication />} errorElement={<ErrorPage />} />
        <Route path="/connexion" element={<Connexion />} errorElement={<ErrorPage />} />
        <Route path="/inscription" element={<Inscription />} errorElement={<ErrorPage />} />
        <Route path="/info" element={<InformationPatient />} errorElement={<ErrorPage />} />
        <Route path="/patients/:patientId" element={< SuiviPatient />} errorElement={<ErrorPage />} />
        <Route path="/menu" element={<Menu/>} errorElement={<ErrorPage />} />
        <Route path="/banner" element={<Banner />} errorElement={<ErrorPage />}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
