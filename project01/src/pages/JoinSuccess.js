import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/JoinSuccess.css'

const JoinSuccess = () => {
  const navigate = useNavigate()
  const goToMain = () => {
    navigate('/main')
  }
  const goToEdit = () => {
    navigate('/edit')
  }
  return (
    <div>
      <div  className='successregister'>가입에 성공하셨습니다</div>
      <button  className='successgister__button' onClick={goToMain}>메인페이지</button>
      <button  className='successgister__button' onClick={goToEdit}>추가정보입력</button>
    </div>
  )
}

export default JoinSuccess