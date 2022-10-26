import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/Login.css'
import logo from "../assets/img/gameus_logo_width.svg"
import { useEffect } from 'react'
// const Login = () => {

const User = {
    id: 'test12345',
    pw: 'dkssud123'
}

function Login() {



    const [id, setId] = useState('');
    const [pw, setPw] = useState("");

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleId = (e) => {
        setId(e.target.value);
        const regex =
            /[a-zA-Z0-9]/
        if (regex.test(id)) {
            setIdValid(true);
        } else {
            setIdValid(false);
        }
    }

    const handlePassword = (e) => {
        setPw(e.target.value);
        const regex =
            /^[A-Za-z0-9]{8,20}$/
        if (regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onClickConfirmbutton = () => {
        if (id === User.id && pw === User.pw) {
            alert('로그인에 성공하셨습니다.');

            navigate('/')
        } else {
            alert('등록되지 않은 회원입니다.');
        }
    }

    const navigate = useNavigate()

    const goToJoin = () => {
        navigate('/join')
        //회원가입으로 보내준다
    }

    useEffect(() => {
        if (idValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [idValid, pwValid]);



    return (

        <div className="LoginPage">
            <div className="LoginTitleWrap">
                <img className="LoginLogo" src={logo}></img>
                <br />
            </div>

            <div className="LoginContentWrap">
                <div className="LoginInputTitle">아이디</div>
                <div className="LoginInputWrap">
                    <input
                        type='text'
                        className="LoginInput"
                        placeholder="아이디를 입력해주세요"
                        value={id}
                        onChange={handleId}

                    />
                </div>
                <div className="LoginErrorMessageWrap">
                    {!idValid && id.length > 0 && (
                        <div>올바른 아이디를 입력해주세요</div>
                    )}
                </div>

                <div style={{ marginTop: "26px" }} className="LoginInputTitle"  >
                    비밀번호
                </div>
                <div className="LoginInputWrap" >
                    <input
                        type='password'
                        className="LoginInput"
                        placeholder="영문 숫자포함 9자리를 입력해주세요"
                        value={pw}
                        onChange={handlePassword}
                    />

                </div>
                <div className="LoginErrorMessageWrap">
                    {!pwValid && pw.length > 0 && (
                        <div>영문, 숫자포함 9자 이상 입력해주세요.</div>
                    )}
                </div>

                <div>
                    <button onClick={onClickConfirmbutton} disabled={notAllow} className="LoginButton">
                        로그인
                    </button>
                </div>
                <div><button className="LoginButton" onClick={goToJoin}>
                    회원가입
                </button>
                </div>
            </div>

        </div>
    );
}


export default Login