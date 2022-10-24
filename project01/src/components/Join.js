import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Join.css'




function Join() {
    const [name, setName] = useState("")
    const [Id, setId] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

  
    const onNameHandler = (event) => {
      setName(event.currentTarget.value)
    }
    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
  
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
  
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
  
    const onSubmit = (event) => {
      event.preventDefault()
      if(password !== confirmPassword) {
        return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
      }
    }
    const navigate = useNavigate()
    const goToSuccess = () => {
        navigate('/joinsuccess')
    }

   
  
    return (
      <div class="joinregister">
        <form>
            <div><input name="id" type="text" placeholder="아이디를 입력해주세요" value={Id} onChange={onIdHandler} class="joinregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onPasswordHandler} class="joinregister__input"/></div>
            <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인해주세요" value={confirmPassword} onChange={onConfirmPasswordHandler} class="joinregister__input"/></div>
            <div><input name="name" type="text" placeholder="닉네임을 입력해주세요" value={name} onChange={onNameHandler} class="joinregister__input"/></div>
            <div><button type="submit" onSubmit={onSubmit} onClick={goToSuccess} class="joinregister__button">계정 생성하기</button></div>
        </form>
      </div>
    );
  }
    export default Join
            
            {/* 아이디 : <input type="text" name='id' placeholder='아이디를 입력해주세요' >
            </input>
            <button >중복확인</button>
            <br />
            비밀번호 : <input type="password" name='pw' placeholder='비밀번호를 입력해주세요' >
            </input>

            <br />
            비밀번호 확인 : <input type="password" name='pwck' >
            </input>

            
            <br />

            닉네임 : <input type="text" name='name' placeholder='닉네임을 입력하세요' >
            </input>
            <br />
            성별 : <input type="radio" name='gender' value='man' >남자</input>
            <input type="radio" name='gender' value='woman' >여자</input>
            <input type="radio" name='gender' value='secret' >비공개</input>
            <br />
            나이 : <input type="date" name='birth' ></input>
            <br />
            <button onClick={goToJoinSuccess}>가입하기</button>
            {/* 가입 실패하면 다시 확인해주세요 메시지 가입 성공하면 가입 성공 메시지 띄우고 로그인 페이지로 이동 */}
            
            