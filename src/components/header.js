import React from "react";
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1> EESHA MOONA</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/aboutMe"> About </Link>
                    </li>
                    <li>
                        <Link to="/blog"> Blog </Link>
                    </li>
                    <li>
                        <Link to="/contactMe"> Contact </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header