import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Mude de App.css para index.css se for aqui que o Tailwind está configurado

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
