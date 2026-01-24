import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx' 
import SobrePage from './components/pages/sobre/SobrePage.tsx'
import ServiciosPage from './components/pages/servicios/ServiciosPage.tsx'
import ContactoPage from './components/pages/contacto/ContactoPage.tsx'
import { Navbar } from './components/Navbar' // Caminho corrigido aqui
import { Footer } from './components/Footer' // Caminho corrigido aqui
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Navbar global */}
      <Navbar /> 
      
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </div>

      {/* Footer global */}
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
