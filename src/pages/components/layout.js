import React from "react";
import { Link } from "gatsby";

import * as style from "./layout.module.css";
// import { container } from './layout.module.css';

const Layout = (props) => {
    return (
        <div className={style.container}>
            <title>{props.pageTitle}</title>
            <nav className={style.navLinks}>
                <ul className={style.navLinks}>
                    <li className={style.navLinkItem}>
                        <Link to="/" className={style.navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={style.navLinkItem}>
                        <Link to="/about" className={style.navLinkText}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={style.heading}>{props.pageTitle}</h1>
                {props.pageTitle}
            </main>
        </div>
    );
}

export default Layout;