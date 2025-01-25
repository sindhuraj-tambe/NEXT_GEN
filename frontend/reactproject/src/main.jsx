import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './component1.css'
import App from './App';
import Component1 from './Components/Component1';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Component1 />
  </StrictMode>,
)
