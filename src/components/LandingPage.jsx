import React from 'react'
import NavbarWeb from './navbar/NavbarWeb'
import Home from './home/Home'
import About from './about/About'
import Service from './service/Service'
import Works from './works/Works'
import Teams from './teams/Teams'
import Testimonials from './testimonials/Testimonials'
import Pricing from './pricing/Pricing'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

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
                <Teams/>
                <Testimonials/>
                <Pricing/>
                <Blog/>
                <Contact/>
            </main>
            <footer id='footer'>
                <Footer/>
            </footer>
        </>
    )
}

export default LandingPage
