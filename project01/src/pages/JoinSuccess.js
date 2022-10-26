import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/JoinSuccess.css'
import logo from "../assets/img/gameus_logo_width.svg"

const JoinSuccess = () => {
  const navigate = useNavigate()
  const goToMain = () => {
    navigate('/main')
  }
  const goToEdit = () => {
    navigate('/edit')
  }
  return (
    <div className="SuccessPage" >
    <div className="SuccessTitleWrap">
        <img className="SuccessLogo" src={logo}></img>
        <br/>
        </div>
    <div className="SuccessContentWrap">
      <div  className="SuccessTitle">가입에 성공하셨습니다</div>
      <br/><br/><br/>
      <button  className="SuccessRegister__button" onClick={goToMain}>메인페이지</button>
      <button  className="SuccessRegister__button" onClick={goToEdit}>추가정보입력</button>
    </div>
    </div>
  )
}

export default JoinSuccess