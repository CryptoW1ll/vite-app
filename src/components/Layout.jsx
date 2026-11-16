import Navbar from './Navbar.jsx'
import React from 'react'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import SiteMeta from './SiteMeta.jsx'
import ConsentManager from './ConsentManager.jsx'

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <SiteMeta />
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
    <ConsentManager />
  </div>
);

export default Layout;
