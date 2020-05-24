import React from "react";
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
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
                </ul>
            </nav>
        </header>
    )
}

export default Header