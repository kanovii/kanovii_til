import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { wrap } from "../css/blog.module.css"


const Homepage = ({pageHeading}) => {
  return (
    <>
      <Layout pageHeading="πΎ kanovii's home">
        <p># μΈμμ μλ¦λ€μ&copy;</p>
        <StaticImage className={wrap} src="../images/main.jpg" loading="eager" alt="kanovii"></StaticImage>
      </Layout>
    </>
  )
}

export default Homepage;