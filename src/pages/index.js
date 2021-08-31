import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";


const Homepage = ({pageHeading}) => {
  return (
    <>
      <Layout pageHeading="kanovii's home😔"> home bro
      <StaticImage src="../images/main.jpg" loading="eager"></StaticImage>

      </Layout>
    </>
  )
}

export default Homepage;