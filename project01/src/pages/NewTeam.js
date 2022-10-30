import React, { useEffect, useRef, useState } from 'react'
import Lol from '../components/Game/Lol'
import Valorant from '../components/Game/Valorant'
import Overwatch2 from '../components/Game/Overwatch2'
import Lostark from '../components/Game/Lostark'
import '../styles/NewTeam.css'
import axios from 'axios'

const NewTeam = () => {

  const [lostark, setLostark] = useState(false)
  const [overwatch2, setOverwatch2] = useState(false)
  const [lol, setLol] = useState(false)
  const [valorant, setValorant] = useState(false)
  // const [gameBtn, setGameBtn] = useState('')
    
  const tNameRef = useRef();
  const tMaxRef = useRef();
  const tContentRef = useRef();
  const gmRef = useRef();
  const gwRef = useRef();
  const a10Ref = useRef();
  const a20Ref = useRef();
  const a30Ref = useRef();
  const a40Ref = useRef();
  const a50Ref = useRef();
  const lolRef = useRef();
  const loaRef = useRef();
  const ovchRef = useRef();
  const vrRef = useRef();

  const lolBtnCk = () => {
    setLol(!lol) 
    setLostark(false)
    setOverwatch2(false)
    setValorant(false)
    console.log(lolRef.current.value);
  }
  
  const ovchBtnCk = () => {
    setOverwatch2(!overwatch2)
    setLostark(false)
    setLol(false)
    setValorant(false)
    console.log(ovchRef.current.value);
  }
  
  const loaBtnCk = () => {
    setLostark(!lostark)
    setOverwatch2(false)
    setLol(false)
    setValorant(false)
    console.log(loaRef.current.value);
  }

  const vrBtnCk = () => {
    setValorant(!valorant)
    setOverwatch2(false)
    setLol(false)
    setLostark(false)
    console.log(vrRef.current.value);
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {"Content-Type": 'application/json'};

    axios.post('http://localhost:8090/gameus/newTeam', {
      teamName: tNameRef.current.value,
      teamMax: tMaxRef.current.value,
      teamContent: tContentRef.current.value,
      man: gmRef.current.checked,
      woman: gwRef.current.checked,
      age10: a10Ref.current.checked,
      age20: a20Ref.current.checked,
      age30: a30Ref.current.checked,
      age40: a40Ref.current.checked,
      age50: a50Ref.current.checked,
      // lostark: loaRef.current.value,
      // overwatch2: ovchRef.current.value,
      // valorant: vrRef.current.value
      // lostark: loaRef.current.checked,
      // valorant: vrRef.current.checked,
      // overwatch2: ovchRef.current.checked
    }, config).then((res)=>{console.log(res)

    }).catch((error)=>console.log(error));
  }

  // const register = () => {
  //   axios.get('http://localhost:8090/gameus/hello', {
  //     teamName: teamName,
  //     teamMax: teamMax,
  //     teamContent: teamContent,
  //     gender: gender,
  //     age: age,
  //     gameSelect: {gameSelect}
  //   }).then((response)=>{
  //     console.log('팀 이름', response.data.teamName)
  //     console.log('팀 정원', response.data.teamMax)
  //     console.log('팀 설명', response.data.teamContent)
  //     console.log('성별', response.data.gender)
  //     console.log('연령', response.data.age)
  //     console.log('게임', response.data.gameSelect)
  //   }).catch((error)=>console.log(error.response))
  // }


  return (
      <div className='plusTeam'>
          <form onSubmit={handleSubmit}>
            <ul id="title" align='left'>
                <li><h3><b>팀만들기</b></h3></li>
                <small>팀을 생성해주세요!</small>
            </ul>
            <table>
              <tr>
                <td><span><b>팀 이름</b></span></td>
                <td><input type="text" name='teamName' size='39'
                    ref={tNameRef}/></td>
              </tr>
              <tr>
                <td><span><b>모집 인원</b></span></td>
                <td><input type='number'
                name='teamMax' min='5' max='20'
                placeholder='5~20 사이의 값만 입력해주세요'
                  ref={tMaxRef}
                 /></td>
              </tr>
              <tr>
                <td><span><b>팀 설명</b></span></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <textarea cols='55' rows='3' name='teamContent'
                  ref={tContentRef}/></td>
                <td></td>
              </tr>
              <tr>
                <td><span><b>성별</b></span></td>
                <td>남 <input type='checkbox' name='gender' ref={gmRef} value='man'/>
                    여 <input type='checkbox' name='gender' ref={gwRef} value='woman'/></td>
              </tr>
              <tr>
                <td><span><b>연령</b></span></td>
                <td>10대 <input type='checkbox' name='age' value='10'ref={a10Ref}/>
                    20대 <input type='checkbox' name='age' value='20' ref={a20Ref}/>
                    30대 <input type='checkbox' name='age' value='30' ref={a30Ref}/>
                    40대 <input type='checkbox' name='age' value='40' ref={a40Ref}/>
                    50대 이상 <input type='checkbox' name='age' value='50' ref={a50Ref}/>
                    </td>
              </tr>
            </table>
              <ul id="playGame">
                <li></li>
                <li><b>플레이 게임</b></li>
                <li>
                  <button type="button" className='gameSelect' name='game' ref={lolRef} value="lol" onClick={lolBtnCk}>리그오브레전드</button>
                  <button type="button" className='gameSelect' name='game' ref={ovchRef} value="overwatch2" onClick={ovchBtnCk}>오버워치2</button>
                  <button type="button" className='gameSelect' name='game' ref={vrRef} value="valorant" onClick={vrBtnCk}>발로란트</button>
                  <button type="button" className='gameSelect' name='game' ref={loaRef} value="lostark" onClick={loaBtnCk}>로스트아크</button>
                </li>
                <li>
                  { lol && <Lol/> }
                  { lostark && <Lostark/> }
                  { overwatch2 && <Overwatch2/> }
                  { valorant && <Valorant/> }
                </li>
                <li><input type='submit' value='팀 만들기' id='newBtn'/></li>
              </ul>
        </form>
      </div>
    )
  }

export default NewTeam