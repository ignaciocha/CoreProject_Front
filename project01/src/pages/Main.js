import React from 'react'
import '../styles/App.css';
import 'react-slideshow-image/dist/styles.css'
import Slideshow from '../components/Slider';
import { TeamList } from '../components/TeamList';
import teamList from '../assets/dummy/teamlist.json'

const Main = () => {
  return (
    <div> {/* 전체 컨테이너 */}
      {/* 슬라이드 컨테이너 */}
      <div className="container mt-5 carousel">
         <Slideshow/>
      </div>
        <h3>최근에 모집을 시작한 팀👀👁👁</h3>
      {/* 팀 목록 div */}
      <div>
        <TeamList/>
      </div>
    </div>
  )
}

export default Main