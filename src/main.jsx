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
import Infos from './components/Infos.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/info" element={<InformationPatient />} errorElement={<ErrorPage />} />
        <Route path="/patient" element={<PatientPreview />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/infos" element={<Infos />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
