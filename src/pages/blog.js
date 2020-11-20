import React from 'react'
import { Link } from 'gatsby'
import Footer from '../Components/footer'
import Header from '../Components/header'


const BlogPage = () => {
    return (
        <div>
            <Header />
            <h1>Blog</h1>
            <p>blog will show up hear</p>
            <p>need a developer <Link to="/contact">Contact Me</Link></p>
            <p><Link to="/">Go Back to Home</Link></p>
            <Footer />
        </div>
    )
}


export default BlogPage
