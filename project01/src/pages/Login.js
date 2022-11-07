import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import '../styles/kakao.css'
import logo from "../assets/img/gameus_logo_width.svg"
import { REST_API_KEY, REDIRECT_URI } from '../components/Kakao';
import axios from "axios";

// const User = {
//   email: 'test@naver.com    ',
//   pw: 'test1234!'
// }
function Login() {
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // const handleLogin = () => {
  //    window.location.href = KAKAO_AUTH_URL;
  //  };
  
 
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  
    const handleInputId = (e) => {
      setInputId(e.target.value);
      setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,30})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  
  };
  
  const onClickLogin = () => {
      console.log("click login");
      console.log("ID : ", inputId);
      console.log("PW : ", inputPw);

      axios
        .post("/api/login", {
          user_id: inputId,
          user_pw: inputPw,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          
          console.log(res.config.data)
          const js = JSON.parse(res.config.data)
          console.log(js.user_id)
          
          console.log(res.data)
          
          if(res.data === "success"){
            alert("로그인에 성공했습니다")
            navigate('/')
              localStorage.setItem("user_id", js.user_id)
          }else {
              alert("로그인 실패")
          }

        })
        .catch((error)=>(console.log(error)));
    };

  const navigate = useNavigate()

  const goToSignUp = () => {
    navigate('/signup')
    //회원가입으로 보내준다
  }

  return (

    
    <div className="LoginPage">
    <form>
      <div className="titleWrap">
        <img className="LoginLogo" src={logo}></img>
        <br />

      </div>

      <div className="contentWrap">
        <div className="LoginInputTitle">이메일 주소</div>
        <div
          className="LoginInputWrap"
        >
          <input
            className="LoginInput"
            type="text"
            placeholder="test@gmail.com"
            value={inputId}
            onChange={handleInputId}
          
          />
        </div>
        <div className="LoginErrorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <div style={{ marginTop: "26px" }} className="LoginInputTitle" >
          비밀번호
        </div>
        <div className="LoginInputWrap">
          <input
            className="LoginInput"
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={inputPw}
            onChange={handleInputPw}
          
          />
        </div>
        <div className="LoginErrorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
      </div>


      <button type="submit" onClick={onClickLogin} disabled={notAllow} className="LoginButton">
        로그인
      </button>
      <div><button className="LoginButton" onClick={goToSignUp}>
        회원가입
      </button>
      </div>
      <hr className="hr" />
      <div>
        {/* <button onClick={handleLogin} className="kakaobtnStyle"><img src='https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_wide.png' /></button> */}
      </div>
      </form>
    </div>

  );
}
export default Login