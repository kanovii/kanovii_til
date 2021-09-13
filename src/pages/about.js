import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import Calendar from 'react-calendar';
import Layout from "../components/layout";
import '../css/calendar.css';
import {heading} from "../components/layout.module.css"
import { portfolio_box, portfolio_img, portfolio_text_box} from "../css/portfolio.module.css"

const AboutPage = ({pageHeading}) => {
  const [value,onChange] = React.useState(new Date())
  return (
    <Layout pageHeading="👾 kanovii's about">
      <Calendar onChange={onChange} value={value} />
      <p>🍆 공부하고 기록하는 고관호입니다.</p>
      <p>🍆 가지는 화로에 구운 가지를 좋아합니다.</p>
      <p>🍆 롤은 실버에서 벗어나지 못하고 있습니다.</p>
      <p>🍆 고기 중 최고는 양고기라고 생각합니다.</p>
      <p>🍆 양고기는 쯔란에 찍어먹는 것을 좋아합니다.</p>
      <div className={heading}>kanovii's portfolio</div>
      <div className={portfolio_box}>
        <StaticImage className={portfolio_img} src="../images/movie_apollo.png" loading="eager" alt="portfolio"></StaticImage>
        <div className={portfolio_text_box}>
          <div>영화 정보 사이트</div>
          <div>graphql과 apollo를 사용하여 영화 API 데이터를 가져온 리엑트 기반 페이지</div>
          <a href="https://kanovii.github.io/apollo/#/" target="_blank">바로가기</a>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage;