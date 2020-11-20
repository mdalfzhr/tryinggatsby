import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/layout'


const ContactPage = () => {
    return (
        <div>
            <Layout>
            <h1>Contact Us</h1>
            <p>This page going to provide my Contact Information like Number Phone, Email, Facebook and Etc..</p>
            <p><Link to="/">Go Back to Home</Link></p>
            </Layout>
        </div>
    )
}

export default ContactPage