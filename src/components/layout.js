import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import DarkMode from "./darkMode"
const Layout = (props) => {
    return (
        <div
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}>
        <DarkMode></DarkMode>
            <div className = {layoutStyles.container}>
                <div className = {layoutStyles.content}>
                <Header />
                {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout