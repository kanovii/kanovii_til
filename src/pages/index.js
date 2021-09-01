import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";


const Homepage = ({pageHeading}) => {
  return (
    <>
      <Layout pageHeading="kanovii's home😔">
        <p>hi i'm kanovii</p>
        <StaticImage src="../images/main.jpg" loading="eager" alt="kanovii"></StaticImage>
      </Layout>
    </>
  )
}

export default Homepage;