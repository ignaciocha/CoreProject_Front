import React from 'react'
import '../styles/Main.css';
import 'react-slideshow-image/dist/styles.css'
import Slideshow from '../components/Slider';
import { TeamList } from '../components/TeamList';

const Main = () => {
  return (
    <div> {/* 전체 컨테이너 */}
      {/* 슬라이드 컨테이너 */}
      <div className="container mt-5 carousel">
         <Slideshow/>
      </div>
        <h3>최근에 모집을 시작한 팀👀👁👁</h3>
      {/* 팀 목록 div */}
      <div className='centerStyle'>
        <TeamList/>
      </div>
    </div>
  )
}

export default Main