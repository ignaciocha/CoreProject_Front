import React, { useState } from 'react';
import logo from '../../assets/img/gameus_logo_width.svg'

const Header = () => {
  
  const [isLogin, setIsLogin] = useState(false)


  const headerStyle = {
    display: 'flex',
    backgroundColor: '#F3F1F1',
    height: '80px',
    marginTop: '20px',
    boxShadow: '0px 10px 20px -10px grey'
  }

  const leftStyle = {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: '100px'
  }

  const rightStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '100px'
  }

  const menuStyle = {
    marginRight: '30px',
    fontSize: '1em'
  }

  const loginStyle = {
    marginRight: '30px',
    fontSize: '0.95em'
  }

  const logoStyle = {
    width: '150px',
    marginRight: '70px'
  }

  return (
    <div style={headerStyle}>
      <div style={leftStyle}>
      <img src={logo} alt='이미지를 불러올 수 없습니다.'
      style={logoStyle}></img>
      <div style={menuStyle}>팀찾기</div>
      <div style={menuStyle}>팀만들기</div>
      <div style={menuStyle}>내팀보기</div>
      </div>
      <div style={rightStyle}>
      <div style={loginStyle}>{isLogin ? null : '회원가입'}</div>
      <div style={loginStyle}>{isLogin ? null : '로그인'}</div>
      <div>{isLogin ? '내정보' : null}</div>
      <div>{isLogin ? '알림' : null}</div>
      </div>
    </div>
  )
}

export default Header;