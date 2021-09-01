import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as wrapStyles from "../../css/blog.module.css"

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData)
    console.log(image)
    console.log(data)
    return(
        <Layout pageHeading={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <div className={wrapStyles.wrap}>
                <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
            </div>
            <span className={wrapStyles.rebeccapurple}># &Kappa;</span>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>            
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