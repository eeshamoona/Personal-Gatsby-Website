import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

import emailLogo from "../images/emailIcon.png"
import linkedinLogo from "../images/linkedinIcon.png"
import githubLogo from "../images/githubIcon.png"
import instagramLogo from "../images/instagramIcon.png"
const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1> 
                <Link className={headerStyles.title} to='/'> EESHA MOONA</Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/"> Home </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem}activeClassName={headerStyles.activeNavItem} to="/aboutMe"> About </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog"> Blog </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contactMe"> Contact </Link>
                    </li>
                    <ul className = {headerStyles.navLogo}>
                        <li>
                        <a href = "mailto:eeshamoona@gmail.com">
                            <img className={headerStyles.navLogoItem} style={{marginTop: '0.3rem', marginLeft: '1.2rem'}}src={emailLogo} alt="Email" ></img></a> 
                        </li>
                        <li>
                        <a href = "https://www.linkedin.com/in/eesha-moona-264b111a6/">
                            <img style= {{ marginLeft: '1.2rem'}}className={headerStyles.navLogoItem} src={linkedinLogo} alt="LinkedIn" ></img></a> 
                        </li>
                        <li>
                        <a href = "https://www.instagram.com/eeshamoona/?hl=en">
                            <img style= {{ marginTop: '0.1rem', marginLeft: '1.05rem'}} className={headerStyles.navLogoItem} src={instagramLogo} alt="Instagram" ></img></a> 
                        </li>
                        <li>
                        <a href = "https://github.com/eeshamoona">
                            <img style= {{ marginTop: '0.1rem'}} className={headerStyles.navLogoItem} src={githubLogo} alt="Github" ></img></a> 
                        </li>
                    </ul>
                </ul>
            </nav>
        </header>
    )
}

export default Header