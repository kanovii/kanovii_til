import * as React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as wrapStyles from "../../css/blog.module.css"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData)
    console.log(image)
    console.log(data)
    deckDeckGoHighlightElement();
    return(
        <Layout pageHeading={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <div className={wrapStyles.wrapTop}>
                <div className={wrapStyles.wrap}>
                    <GatsbyImage className={wrapStyles.postimg} image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
                </div>
            </div> 
            <MDXRenderer className={wrapStyles.bodyBox}>
                {data.mdx.body}
            </MDXRenderer>    
            <span className={wrapStyles.rebeccapurple}># 🍆</span>      
            <Link className={wrapStyles.backLink} to="/blog">TIL 목록으로 돌아가기 =></Link>  
        </Layout>
    )
}
export const query = graphql`
    query kanovii($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                date(formatString: "dddd, MMMM Do YYYY")
                title
                hero_image_alt
                hero_image_credit_text
                hero_image {
                    childImageSharp{
                        gatsbyImageData
                    }
                }
            }
            body
        }
    }
`
export default BlogPost