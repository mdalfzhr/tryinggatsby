import React from 'react'
import { Link } from 'gatsby'
import Footer from '../Components/footer'
import Header from '../Components/header'


const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Us</h1>
            <p>this page is going to explain about why im starting to use React.js</p>
            <p>need a developer <Link to="/contact">Contact Me</Link></p>
            <p><Link to="/">Go Back to Home</Link></p>
            <Footer />
        </div>
        
    )
} 


export default AboutPage