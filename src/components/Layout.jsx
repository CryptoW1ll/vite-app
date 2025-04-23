import Navbar from './Navbar.jsx'
import React from 'react'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <>
    <div>
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
  
)
export default Layout
