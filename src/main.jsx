import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Njiko.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
