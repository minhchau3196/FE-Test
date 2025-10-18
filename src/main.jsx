import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserDashboard from './UserDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDashboard />
  </StrictMode>
)
