import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Authentication from './pages/Authentication/index.jsx'
import App from './App.jsx'
import Connexion from './pages/Connexion/index.jsx'
import Inscription from './pages/Inscription/index.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
