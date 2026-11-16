import React, { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import NotFound404 from './components/NotFound404'
import Layout from './components/Layout.jsx'

const Homepage = lazy(() => import('./components/Homepage.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Project = lazy(() => import('./components/Project.jsx'));
const FATFPage = lazy(() => import('./components/FATFPage.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy.jsx'));
const TermsOfService = lazy(() => import('./components/TermsOfService.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound404 />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Project /> },
      { path: 'fatf', element: <FATFPage /> },
      // { path: 'fatf', element: <FATF /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <TermsOfService /> },
    ],
  },
],
  {
    basename: import.meta.env.BASE_URL || '/' // Automatically matches Vite's base
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-gray-950 text-white">Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)
