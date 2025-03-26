import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import reportWebVitals from './components/reportWebVitals'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// This function logs web vitals to the console or sends them to an analytics endpoint
//reportWebVitals(console.log);  // Replace console.log with your custom reporting function
