import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Shared/Global.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
