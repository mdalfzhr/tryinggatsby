import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/layout'


const BlogPage = () => {
    return (
        <div>
            <Layout>
            <h1>Blog</h1>
            <p>blog will show up hear</p>
            <p>need a developer <Link to="/contact">Contact Me</Link></p>
            <p><Link to="/">Go Back to Home</Link></p>
            </Layout>
        </div>
    )
}


export default BlogPage
