import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Main.css';
const Main = () => {
    const navigate = useNavigate()
    const goToJoin = () => {
        navigate('/join')
    }
    const goToLogin = () => {
        navigate('/login')
    }

  return (
    <div>
        <div><button onClick={goToJoin} className='mainbutton' >회원가입</button>
        <button onClick={goToLogin} className='mainbutton' >로그인</button></div>
        
        </div>
  )
}

export default Main