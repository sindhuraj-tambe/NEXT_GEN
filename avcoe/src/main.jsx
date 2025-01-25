import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles1.css'
import './styles2.css'

import Component2 from './Components/Component2.jsx'
import Component3 from './Components/Component3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
<    Component2></Component2>
<    Component3></Component3>
  </StrictMode>,
)