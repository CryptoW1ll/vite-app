import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import NotFound404 from './components/NotFound404'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Project from './components/Project'
import FATF from './components/FATF'


const router = createBrowserRouter([{
  path: "/",
  element: <Homepage />,
  errorElement: <NotFound404 />,
},
{
  path: "/about",
  element: <About />,
},
{
  path: "/projects",
  element: <Project />,
},
{
   path: "/projects/:projectId",
   element: <Project />,
   //element: <ProjectDetails />,

},
{
  path: "/fatf",
  element: <FATF />,

},
]);

function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Navbar />
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
      <Footer />
    </div>
    );
}
export default App
