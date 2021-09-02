import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container,atContainer, heading, navLinks, navLinkItem, navLinkText, } from "./layout.module.css";
import { Helmet } from "react-helmet";
import Footer from "./footer"
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
        <>
        <div className={container}>
            <div className={atContainer}>
                <Helmet>
                    <title> {data.site.siteMetadata.title} </title>
                </Helmet> 
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>#Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>#About</Link></li>
                    <li className={navLinkItem}><Link to="/contact" className={navLinkText}>#Contact</Link></li>
                    <li className={navLinkItem}><Link to="/blog" className={navLinkText}>#TIL</Link></li>
                </ul>  
                <main>
                    <h1 className={heading}>{pageHeading}</h1>
                    <div>
                        
                        {children}
                    </div>
                </main> 
            </div>
            
        </div>
        <Footer></Footer>
        </>
    )

}

export default Layout;