import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import reportWebVitals from './components/reportWebVitals'; 

//connects our HTML and React code!
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <App />,
)

// This function logs web vitals to the console or sends them to an analytics endpoint
//reportWebVitals(console.log);  // Replace console.log with your custom reporting function


/*const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);*/