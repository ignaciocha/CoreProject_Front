import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/MyPage.css'
import './Edit';

const MyPage = () => {
    const navigate = useNavigate()
    const goToEdit = () => {
        navigate('/Edit')
        //회원정보 수정으로 가야함
    }

    return (
        <div>
            <form>
                아이디 : <input className='mypage' type='text' name='id'> </input>
                <br />
                닉네임 : <input className='mypage' type='text' name='name'> </input>
                <br />
                게임 : <input type='text' name='game'></input>          
                <br/>
                
                <button onClick={goToEdit}>회원정보수정</button>
                
            </form>
        </div>
    )
}

export default MyPage