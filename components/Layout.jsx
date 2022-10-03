import React, { useState } from 'react';
import Head from 'next/head';

import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineDarkMode } from 'react-icons/md'

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false)

  return (
    <div style={{backgroundColor: dark? "#232323" : "white"}} id={dark? "layout-dark" : ""} className="layout">
      <Head>
        <title>Azeem Sound</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      <div className="change-mode">
        {dark && (<div onClick={() => setDark(false)} className="light">
          <MdOutlineLightMode />
        </div>)}
        {!dark && (<div onClick={() => setDark(true)} className="dark">
          <MdOutlineDarkMode />
        </div>)}
      </div>
    </div>
  )
}

export default Layout


{/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path></svg> */}