import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react'
import { auth0Config } from './config/auth0'
import './index.css'
import Homepage from './components/Homepage.jsx'
import NotFound404 from './components/NotFound404'
import About from './components/About'
import Project from './components/Project'
import FATF from './components/FATF'
import Contact from './components/Contact.jsx'
import Layout from './components/Layout.jsx'
import AuthCallback from './components/AuthCallback.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound404 />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/auth', element: <AuthCallback /> },
      // { path: 'about', element: <About /> },
      // { path: 'projects', element: <Project /> },
      // { path: 'projects/:projectId', element: <Project /> },
      // { path: 'fatf', element: <FATF /> },
      // { path: 'contact', element: <Contact /> },
    ],
  },
],
  {
    basename: import.meta.env.BASE_URL || '/' // Automatically matches Vite's base
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={auth0Config.authorizationParams}
      useRefreshTokens={auth0Config.useRefreshTokens}
      cacheLocation={auth0Config.cacheLocation}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>
)
