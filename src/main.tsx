import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Removi o import do index.css que estava a dar erro
// Se quiser usar estilos, certifique-se que o ficheiro existe na pasta src

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
