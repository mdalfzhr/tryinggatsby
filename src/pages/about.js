import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/layout'


const AboutPage = () => {
    return (
        <div>
            <Layout>
            <h1>About Us</h1>
            <p>this page is going to explain about why im starting to use React.js</p>
            <p>need a developer <Link to="/contact">Contact Me</Link></p>
            <p><Link to="/">Go Back to Home</Link></p>
            </Layout>
        </div>
        
    )
} 


export default AboutPage