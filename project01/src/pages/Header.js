import React, { useState } from "react";
import logo from "../assets/img/gameus_logo_width.svg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Notifications from "../components/Modal/Notifications";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="headerStyle">
      <div className="leftStyle">
        <Link to="./">
          <img
            src={logo}
            alt="이미지를 불러올 수 없습니다."
            className="logoStyle"
          ></img>
        </Link>
        <Link className="textLink" to='/teamsearch'>
          <div className="topStyle">팀찾기</div>
        </Link>
        <Link className="textLink" to='/newteam'>
          <div className="topStyle">팀만들기</div>
        </Link>
        <Link className="textLink" to='/myteam'>
          <div className="topStyle">내팀보기</div>
        </Link>
      </div>
      {!isLogin ? (
        <div className="rightStyle">
          <Link className="textLink" to='/mypage'>
            <div className="loginStyle">내정보</div>
          </Link>
          <Link className="text-link">
            <div className="loginStyle"><Notifications/></div>
          </Link>
        </div>
      ) : (
        <div className="rightStyle">
          <Link className="textLink" to='/join'>
            <div className="loginStyle">회원가입</div>
          </Link>
          <Link className="textLink" to='/login'>
            <div className="loginStyle">로그인</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
