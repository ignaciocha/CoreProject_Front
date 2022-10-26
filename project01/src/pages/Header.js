import React, { useState } from "react";
import logo from "../assets/img/gameus_logo_width.svg";
import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import "./Login";
import "./Join";


const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  
  const navigate = useNavigate()

const goToJoin = () => {
    navigate('/join')
}

const goToLogin = () => {
  navigate('/login')
}

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
        <Link className="textLink">
          <div className="topStyle">팀찾기</div>
        </Link>
        <Link className="textLink">
          <div className="topStyle">팀만들기</div>
        </Link>
        <Link className="textLink">
          <div className="topStyle">내팀보기</div>
        </Link>
      </div>
      {isLogin ? (
        <div className="rightStyle">
          <Link className="textLink">
            <div className="loginStyle">내정보</div>
          </Link>
          <Link className="text-link">
            <div className="loginStyle">알림</div>
          </Link>
        </div>
      ) : (
        <div className="rightStyle">
          <Link to='./join' className="textLink">
            <div className="loginStyle" onClick={goToJoin}>회원가입</div>
          </Link>
          <Link to='./login' className="textLink">
            <div className="loginStyle" onClick={goToLogin}>로그인</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
