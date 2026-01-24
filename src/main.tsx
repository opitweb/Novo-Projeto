import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx' 
import SobrePage from './components/pages/sobre/SobrePage.tsx'
import ServiciosPage from './components/pages/servicios/ServiciosPage.tsx'
import ContactoPage from './components/pages/contacto/ContactoPage.tsx'
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota da Página Inicial (Landing Page) */}
        <Route path="/" element={<App />} />
        
        {/* Rotas das novas páginas que você criou */}
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
