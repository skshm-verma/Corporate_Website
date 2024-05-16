import React from 'react'
import NavbarWeb from './navbar/NavbarWeb'
import Home from './home/Home'
import About from './about/About'

const LandingPage = () => {
    return (
        <>
            <header id='header'>
                <NavbarWeb/>
            </header>
            <main>
                <Home/>
                <About/>
            </main>
        </>
    )
}

export default LandingPage
