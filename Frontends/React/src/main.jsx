/**
 * @description Main application file, execution starts here. Creates the root
 * for the main component.
 * @author Hector Mendoza
 * @requires Vite, React
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)