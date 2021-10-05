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
    <Layout pageHeading="👾 kanovii's about">
      <Calendar onChange={onChange} value={value} />
      <p>🍆 공부하고 기록하는 고관호입니다.</p>
      <p>🍆 롤은 실버에서 벗어나지 못하고 있습니다.</p>
      <p>🍆 고기 중 최고는 양고기라고 생각합니다.</p>
      <p>🍆 양고기는 쯔란에 찍어먹는 것을 좋아합니다.</p>
      <p>🍆 삶은 유한적입니다.</p>
      <p>🍆 사람들은 인생의 결말을 알고 있습니다.</p>
      <p>🍆 모두에게 와닿진 안습니다.</p>
      <p>🍆 겪어보면 압니다. 죽을 문턱까지 갔을때 들었던 생각들...</p>
      <p>🍆 '그녀 앞에서 좀만 더 웃어줄껄, 애니 보면서 누워있던 그시간 네 머리냄새'</p>
      <p>🍆 정말 사소하면서도 형통 했던 그 하나하나의 기억들이</p>
      <p>🍆 '행복한 삶이었구나 나도' 라는 생각이 들고</p>
      <p>🍆 엄마도 이런 아름다운 추억을, 아들인 나와의 추억을 회상하면서 죽음을 맞이 했었을까</p>
      <p>🍆 좋은 기억이었다면 어떤 기억을 떠올렸을까 처음 날 나아주신 날일까? 걷는날?</p>
      <p>🍆 살아서는 알 방법이 없다.</p>
      <p>🍆 보고싶다. 다시한번 품에 안겨서 25살에 한심하게 어리광부리는 장남이 되고싶다.</p>
      <p>🍆 어렸을때 대화했던 엄마의 모습도 눈에 선하다 도쿄타워 밑에서 먹지 못하는 아이스크림 바라보고 만 있던 4가족들</p>
      <p>🍆 엄마의 빈자리는 크지만 적응해서 살고 있어 하지만 가끔씩 훅 치고 들어오는 기억과 추억 막을 수 가 없네</p>

      <div className={heading, portfolio_text}>kanovii's portfolio</div>
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