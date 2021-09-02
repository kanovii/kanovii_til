import * as React from 'react'
import Calendar from 'react-calendar';
import Layout from "../components/layout";
import '../css/calendar.css';

const AboutPage = ({pageHeading}) => {
  const [value,onChange] = React.useState(new Date())
  return (
    <Layout pageHeading="🧙🏻 kanovii's about">
      <Calendar onChange={onChange} value={value} />
      <p>🍆 공부하고 기록하는 고관호입니다.</p>
      <p>🍆 가지는 화로에 구운 가지를 좋아합니다.</p>
      <p>🍆 롤은 실버에서 벗어나지 못하고 있습니다.</p>
      <p>🍆 고기 중 최고는 양고기라고 생각합니다.</p>
      <p>🍆 양고기는 쯔란에 찍어먹는 것을 좋아합니다.</p>
    </Layout>
  )
}
export default AboutPage;