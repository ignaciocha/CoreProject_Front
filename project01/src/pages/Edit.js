import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/Edit.css'


const Edit = () => {

    const [game, setGame] = useState("")

    const navigate = useNavigate()
    const goToMain = () => {
        navigate('/')
        //마이페이지로 보내준다

    }
    const onSubmit = (event) => {
        event.preventDefault()
    }
    return (
    <div>
            <div><input type="text" name="id" className='editregister__input' placeholder="아이디를 입력해주세요"></input></div>
            <div> <input type="password" name="pw" className='editregister__input' placeholder="비밀번호를 입력해주세요"></input></div>
            <div><input type="text" name="name" className='editregister__input' placeholder="닉네임을 입력해주세요"></input></div>
            <div>
                <select className='editregister__input'>
                    <option>게임선택</option>
                    <option>롤</option>
                    <option>로아</option>
                    <option>발로란트</option>
                    <option>오버워치2</option>
                </select>
                {/* <input type="radio" name="game" value="lol" class="editregister__input"></input>
            <input type="radio" name="game" value="lostark" class="editregister__input"></input>
            <input type="radio" name="game" value="valo" class="editregister__input"></input>
            <input type="radio" name="game" value="overwatch" class="editregister__input"></input>
            */}
                <div>
                    <select className='editregister__input'>
                        <option>포지션</option>
                        <option>탑</option>
                        <option>미드</option>
                        <option>정글</option>
                        <option>원딜</option>
                        <option>서포터</option>
                    </select>
                </div>
            </div>


            <button type="submit" onSubmit={onSubmit} className='editregister__button' onClick={goToMain}  >완료</button>
        </div>
    )
}

export default Edit