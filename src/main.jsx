import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Homepage from './components/Homepage.jsx'
import NotFound404 from './components/NotFound404'
import About from './components/About'
import Project from './components/Project'
import FATF from './components/FATF'
import Contact from './components/Contact.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound404 />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Project /> },
      { path: 'projects/:projectId', element: <Project /> },
      { path: 'fatf', element: <FATF /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
