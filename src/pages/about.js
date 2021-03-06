import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import Calendar from 'react-calendar';
import Layout from "../components/layout";
import '../css/calendar.css';
import {heading} from "../components/layout.module.css"
import {portfolio_text, portfolio_box, portfolio_img, portfolio_text_box} from "../css/portfolio.module.css"

const AboutPage = ({pageHeading}) => {
  const [value,onChange] = React.useState(new Date())
  return (
    <Layout pageHeading="๐พ kanovii's about">
      <Calendar onChange={onChange} value={value} />
      <p>๐ ๊ณต๋ถํ๊ณ  ๊ธฐ๋กํ๋ ๊ณ ๊ดํธ์๋๋ค.</p>
      <p>๐ ๋กค์ ์ค๋ฒ์์ ๋ฒ์ด๋์ง ๋ชปํ๊ณ  ์์ต๋๋ค.</p>
      <p>๐ ๊ณ ๊ธฐ ์ค ์ต๊ณ ๋ ์๊ณ ๊ธฐ๋ผ๊ณ  ์๊ฐํฉ๋๋ค.</p>
      <p>๐ ์๊ณ ๊ธฐ๋ ์ฏ๋์ ์ฐ์ด๋จน๋ ๊ฒ์ ์ข์ํฉ๋๋ค.</p>

      <div className={heading, portfolio_text}>kanovii's portfolio</div>
      <div className={portfolio_box}>
        <StaticImage className={portfolio_img} src="../images/movie_apollo.png" loading="eager" alt="portfolio"></StaticImage>
        <div className={portfolio_text_box}>
          <div>์ํ ์ ๋ณด ์ฌ์ดํธ</div>
          <div>graphql๊ณผ apollo๋ฅผ ์ฌ์ฉํ์ฌ ์ํ API ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์จ ๋ฆฌ์ํธ ๊ธฐ๋ฐ ํ์ด์ง</div>
          <a href="https://kanovii.github.io/apollo/#/" target="_blank">๋ฐ๋ก๊ฐ๊ธฐ</a>
        </div>
      </div>

    </Layout>
  )
}
export default AboutPage;