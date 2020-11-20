import React from 'react'
import { Link } from 'gatsby'
import Footer from '../Components/footer'
import Header from '../Components/header'


 const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I'm Alif, a Front-End Web Developer living in Malaysia</h2>
      <p>need a developer <a href="/contact">Contact Me</a></p>
      <p>need a developer <Link to="/contact">Contact Me</Link></p>
      <p>need a developer <Link to="/blog">blog</Link></p>
      <p>need a developer <Link to="/about">about Me</Link></p>
      <Footer />
    </div>
  )
}


export default IndexPage