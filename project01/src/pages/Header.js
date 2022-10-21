import React, { useState } from 'react';
import logo from '../assets/img/gameus_logo_width.svg';
import '../styles/Header.css'
import {Link} from "react-router-dom";

const Header = () => {
  
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className='headerStyle'>
      <div className='leftStyle'>
      <Link to='./'><img src={logo} alt='이미지를 불러올 수 없습니다.'
      className='logoStyle'></img></Link>
      <Link className='textLink'><div className='topStyle'>
        팀찾기
        </div></Link>
      <Link className='textLink'><div className='topStyle'>
        팀만들기
        </div></Link>
      <Link className='textLink'><div className='topStyle'>
        내팀보기
        </div></Link>
      </div>
      <div className='rightStyle'>
      <Link className='textLink'><div className='loginStyle'>
        {isLogin ? null : '회원가입'}
        </div></Link>
      <Link className='textLink'><div className='loginStyle'>
        {isLogin ? null : '로그인'}
        </div></Link>
      <Link className='textLink'><div>
        {isLogin ? '내정보' : null}
        </div></Link>
      <Link className='text-link'><div>
        {isLogin ? '알림' : null}
        </div></Link>
      </div>
    </div>
  )
}

export default Header;