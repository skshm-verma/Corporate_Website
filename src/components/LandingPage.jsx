import React from 'react'
import NavbarWeb from './navbar/NavbarWeb'
import Home from './home/Home'
import About from './about/About'
import Service from './service/Service'
import Works from './works/Works'

const LandingPage = () => {
    return (
        <>
            <header id='header'>
                <NavbarWeb/>
            </header>
            <main>
                <Home/>
                <About/>
                <Service/>
                <Works/>
            </main>
        </>
    )
}

export default LandingPage
