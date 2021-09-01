import { Link, graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";


const BlogPage = ({ data }) => {
    console.log(data)
    return (
        <Layout pageHeading="kanoviis's blog">
            {data.allMdx.nodes.map((node) =>{
                return (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>{node.frontmatter.date}</p>
                    </article> );     
            })}
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`
export default BlogPage