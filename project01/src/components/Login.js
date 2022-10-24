import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Login.css'
// const Login = () => {

    
    function Login() {
        
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    
    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }
    
    
    const navigate = useNavigate()
    const goToEdit = () => {
        navigate('/Edit')
      //main으로 보내준다
    
     }
    const goToJoin = () => {
        navigate('/join')
        //회원가입으로 보내준다
       }    

    

    return (
        
        <div class="loginregister">
            <form>
                <div> <input name="id" type="text" placeholder="아이디를 입력해주세요" value={id} onChange={onIdHandler} class="loginregister__input" /></div>
                <div> <input name="password" type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onPasswordHandler} class="loginregister__input" /></div>
                <div><button type="submit" onSubmit={onSubmit} class="loginregister__button" onClick={goToJoin}>회원가입</button></div>
                <div><button type="submit" onSubmit={onSubmit} class="loginregister__button" onClick={goToEdit}>로그인</button></div>
            </form>
        </div>
    );
}


export default Login