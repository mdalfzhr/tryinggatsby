import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/layout'


 const IndexPage = () => {
   return (
     <Layout>
       <h1>Hello</h1>
      <h2>I'm Alif, a Front-End Web Developer living in Malaysia</h2>
      <p>need a developer <a href="/contact">Contact Me</a></p>
      <p>need a developer <Link to="/contact">Contact Me</Link></p>
      <p>need a developer <Link to="/blog">blog</Link></p>
      <p>need a developer <Link to="/about">about Me</Link></p>
     </Layout>
   )

}


export default IndexPage