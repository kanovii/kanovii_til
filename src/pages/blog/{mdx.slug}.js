import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data }) => {
    console.log(data)
    return(
        <Layout pageHeading={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
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
            }
            body
        }
    }
  
`
export default BlogPost