import React from "react"
import { Link } from 'gatsby'


const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>Hello There!</p>
            <p>My name is Eesha and I'm a Computer Science Student at University of Illinois at Urbana Champaign</p>
            <p>I am also minoring in Criminology and have an interest in exploring the dynamics between human beings and technology</p>
            <p> Need a software engineer? <Link to="/contactMe">Contact me.</Link></p>
        </div>
    )
}

export default AboutPage