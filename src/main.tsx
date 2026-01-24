import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx' 
import SobrePage from './components/pages/sobre/SobrePage.tsx'
import ServiciosPage from './components/pages/servicios/ServiciosPage.tsx'
import ContactoPage from './components/pages/contacto/ContactoPage.tsx'
import { Navbar } from './components/Navbar' // Certifique-se de que a Navbar está exportada
import { Footer } from './components/Footer' // Se você criou um componente de Footer
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Colocando aqui, eles aparecem em TODAS as páginas */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
