import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import * as style from "./layout.module.css";

const Layout = (props) => {

    const data = useStaticQuery(
        graphql`
            {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `);

    return (
        <div className={style.container}>
            <title>{props.pageTitle} | {data.site.siteMetadata.title}</title>
            <h1>{data.site.siteMetadata.title}</h1>
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
                    <li className={style.navLinkItem}>
                        <Link to="/blog" className={style.navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h2 className={style.heading}>{props.pageTitle}</h2>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;