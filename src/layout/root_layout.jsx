import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './nav_bar/nav_bar'
import Footer from './footer/footer'
// import Footer from 'src/layout/footer'

function RootLayout() {
  return (
    <>
        <NavBar/>                                    
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout
