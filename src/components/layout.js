import * as React from "react";
import { Link } from "gatsby";
import { children } from "min-document";
import { container, heading, navLinks, navLinkItem, navLinkText} from "./layout.module.css";
const Layout = ({pageHeading, children}) => {
    return(
        <main className={container}>
            <title>{pageHeading}</title>
            <h1 className={heading}>{pageHeading}</h1>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>about</Link></li>
                    <li className={navLinkItem}><Link to="/contact" className={navLinkText}>contact</Link></li>
                </ul>
                {children}
            </nav>
        </main> 
    )

}

export default Layout;