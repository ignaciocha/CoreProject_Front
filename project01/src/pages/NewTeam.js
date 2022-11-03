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
  const [selGame, setSelGame] = useState('')
  const [tGender, setTGender] = useState('')

  const tNameRef = useRef();
  const tMaxRef = useRef();
  const tContentRef = useRef();

  const lolBtnCk = () => {
    setLol(!lol) 
    setLostark(false)
    setOverwatch2(false)
    setValorant(false)
    setSelGame('lol')
  }
  
  const ovchBtnCk = () => {
    setOverwatch2(!overwatch2)
    setLostark(false)
    setLol(false)
    setValorant(false)
    setSelGame('overwatch2')
  }
  
  const loaBtnCk = () => {
    setLostark(!lostark)
    setOverwatch2(false)
    setLol(false)
    setValorant(false)
    setSelGame('lostark')
  }

  const vrBtnCk = () => {
    setValorant(!valorant)
    setOverwatch2(false)
    setLol(false)
    setLostark(false)
    setSelGame('valorant')
  }

  const genderCk = (e) => {
    console.log(e.target.value)
    setTGender(e.target.value)
  }

  const [ageArr, setAgeArr] = useState([])
  
  const addAgeArr = (e) => {
    if(e.target.checked === true){
      setAgeArr([...ageArr, 
        Number(e.target.value)
      ])
    }
  }

  const delAgeArr = (e) => {
    if(e.target.checked === false){
      ageArr.splice(ageArr.indexOf(Number(e.target.value)), 1)
      setAgeArr([...ageArr])
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {"Content-Type": 'application/json'};

    axios.post('/api/team', {
      teamName: tNameRef.current.value,
      teamMax: tMaxRef.current.value,
      teamContent: tContentRef.current.value,
      teamGame: selGame,
      teamGender: tGender,
      teamAge: ageArr
      // teamTD: ,
      // teamPosition: ,
    }, config).then((res)=>{console.log(res.config.data)

    }).catch((error)=>console.log(error));
  }

  return (
      <div className='plusTeam'>
          <form onSubmit={handleSubmit} post='get'>
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
                <td>
                  여 <input type='radio' name='gender' value='w' onChange={genderCk}/> {"\u00A0"}
                  남 <input type='radio' name='gender' value='m' onChange={genderCk}/> {"\u00A0"}
                  제한 없음 <input type='radio' name='gender' value='none' onChange={genderCk}/>
                </td>
              </tr>
              <tr>
                <td><span><b>연령</b></span></td>
                <td>10대 <input type='checkbox' name='age' value='10' onChange={addAgeArr} onClick={delAgeArr}/>
                    20대 <input type='checkbox' name='age' value='20' onChange={addAgeArr} onClick={delAgeArr}/>
                    30대 <input type='checkbox' name='age' value='30' onChange={addAgeArr} onClick={delAgeArr}/>
                    40대 <input type='checkbox' name='age' value='40' onChange={addAgeArr} onClick={delAgeArr}/>
                    50대 이상 <input type='checkbox' name='age' value='50' onChange={addAgeArr} onClick={delAgeArr}/>
                    </td>
              </tr>
            </table>
              <ul id="playGame">
                <li></li>
                <li><b>플레이 게임</b></li>
                <li>
                  <button type="button" className='gameSelect' name='game' value="lol" onClick={lolBtnCk}>리그오브레전드</button>
                  <button type="button" className='gameSelect' name='game' value="overwatch2" onClick={ovchBtnCk}>오버워치2</button>
                  <button type="button" className='gameSelect' name='game' value="valorant" onClick={vrBtnCk}>발로란트</button>
                  <button type="button" className='gameSelect' name='game' value="lostark" onClick={loaBtnCk}>로스트아크</button>
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