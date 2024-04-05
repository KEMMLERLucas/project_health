import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Authentication from './components/Authentication.jsx'
import App from './App.jsx'
import Connexion from './components/Connexion.jsx'
import Inscription from './components/Inscription.jsx'
import "./index.css"
import PatientPreview from './components/PatientPreview.jsx'
import Menu from './components/Menu.jsx'
import Banner from './components/Banner.jsx'


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/patient" element={<PatientPreview />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/banner" element={<Banner />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
