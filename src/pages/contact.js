import React from 'react'
import { Link } from 'gatsby'
import Footer from '../Components/footer'
import Header from '../Components/header'


const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact Us</h1>
            <p>This page going to provide my Contact Information like Number Phone, Email, Facebook and Etc..</p>
            <p><Link to="/">Go Back to Home</Link></p>
            <Footer />
        </div>
    )
}

export default ContactPage