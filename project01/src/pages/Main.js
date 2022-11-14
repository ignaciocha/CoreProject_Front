import React from "react";
import "../styles/Main.css";
import "react-slideshow-image/dist/styles.css";
import Slideshow from "../components/Slider";
import MainCarousel from "../components/MainCarousel";
import { TeamList } from "../components/TeamList";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* 전체 컨테이너 */}
      {/* 슬라이드 컨테이너 */}
      {/* <div className="container mt-5 carousel"> */}
      <div className="carousel-container">
        <MainCarousel />
      </div>
      <div className="mainArticle">
        <h3 className="mainH3">
          <b>최근에 모집을 시작한 팀👀</b>
        </h3>

        <Link to={"/teamsearch"}>
          <button className="mainMoreBtn">더보기</button>
        </Link>
      </div>
      {/* 팀 목록 div */}
      <div className="centerStyle">
        <TeamList />
      </div>
    </div>
  );
};

export default Main;
