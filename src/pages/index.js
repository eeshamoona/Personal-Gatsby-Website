import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
//import indexStyles from './index.module.scss'
const IndexPage = () => {
  return (
    <Layout>
        <h1>Hello There.</h1>
        <h2>I'm a computer science student at University of Illinois at Urbana-Champaign</h2>
        <p> Need a software engineer? <Link to="/contactMe">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage