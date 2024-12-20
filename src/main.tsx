import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './App.tsx'
import App from './App.tsx'
import EmpApi from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmpApi />
  </StrictMode>,
)
