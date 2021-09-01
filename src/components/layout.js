import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container, heading, navLinks, navLinkItem, navLinkText} from "./layout.module.css";
import { Helmet } from "react-helmet";
const Layout = ({pageHeading, children}) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
    return(
        <div className={container}>
            <Helmet>
                <title> {data.site.siteMetadata.title} </title>
            </Helmet> 
            <ul className={navLinks}>
                        <li className={navLinkItem}><Link to="/" className={navLinkText}>home</Link></li>
                        <li className={navLinkItem}><Link to="/about" className={navLinkText}>about</Link></li>
                        <li className={navLinkItem}><Link to="/contact" className={navLinkText}>contact</Link></li>
                        <li className={navLinkItem}><Link to="/blog" className={navLinkText}>blog</Link></li>
                    </ul>  
            <main>
                <h1 className={heading}>{pageHeading}</h1>
                <nav>
                    
                    {children}
                </nav>
            </main> 
        </div>
    )

}

export default Layout;