import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"

const IndexPage = () => {

  return (
    <Layout>
      <h1>Hello There.</h1>
      <Link to = "/aboutMe">I'm Eesha</Link>
      <p> Read what I'm all about! <Link to="/blog">Go To Blog Page</Link></p>
      <p> Need a software engineer? <Link to="/contactMe">Contact me.</Link></p>
    </Layout>
  )

}

export default IndexPage