import React, { useEffect, useState } from 'react'
import Lol from '../components/Game/Lol'
import Valorant from '../components/Game/Valorant'
import Overwatch2 from '../components/Game/Overwatch2'
import Lostark from '../components/Game/Lostark'
import '../styles/NewTeam.css'

const NewTeam = () => {

  const [lostark, setLostark] = useState(false)
  const [overwatch2, setOverwatch2] = useState(false)
  const [lol, setLol] = useState(false)
  const [valorant, setValorant] = useState(false)

  const lolBtnCk = () => {
    setLol(!lol) 
    setLostark(false)
    setOverwatch2(false)
    setValorant(false)
  }

  const ovchBtnCk = () => {
    setOverwatch2(!overwatch2)
    setLostark(false)
    setLol(false)
    setValorant(false)
  }

  const loaBtnCk = () => {
    setLostark(!lostark)
    setOverwatch2(false)
    setLol(false)
    setValorant(false)
  }

  const vrBtnCk = () => {
    setValorant(!valorant)
    setOverwatch2(false)
    setLol(false)
    setLostark(false)
  }

  return (
      <div className='plusTeam'>
          <form action='#' method='get'>
            <ul id="title" align='left'>
                <li><h3><b>팀만들기</b></h3></li>
                <small>팀을 생성해주세요!</small>
            </ul>
            <table>
              <tr>
                <td><span><b>팀 이름</b></span></td>
                <td><input type="text" name='teamName' size='39'/></td>
              </tr>
              <tr>
                <td><span><b>모집 인원</b></span></td>
                <td><input type='number' name='teamMax' min='5' max='20' placeholder='5~20 사이의 값만 입력해주세요'/></td>
              </tr>
              <tr>
                <td><span><b>팀 설명</b></span></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan='2'><textarea cols='55' rows='3'></textarea></td>
                <td></td>
              </tr>
              <tr>
                <td><span><b>성별</b></span></td>
                <td>남 <input type='checkbox' name='gender' value='man'/>
                    여 <input type='checkbox' name='gender' value='woman'/></td>
              </tr>
              <tr>
                <td><span><b>연령</b></span></td>
                <td>10대 <input type='checkbox' name='age' value='10'/>
                    20대 <input type='checkbox' name='age' value='20'/>
                    30대 <input type='checkbox' name='age' value='30'/>
                    40대 <input type='checkbox' name='age' value='40'/>
                    50대 이상 <input type='checkbox' name='age' value='50'/></td>
              </tr>
            </table>
              <ul id="playGame">
                <li></li>
                <li><b>플레이 게임</b></li>
                <li>
                  <button type="button" className='gameSelect' name="lol" onClick={lolBtnCk}>리그오브레전드</button>
                  <button type="button" className='gameSelect' name="overwatch2" onClick={ovchBtnCk}>오버워치2</button>
                  <button type="button" className='gameSelect' name="valorant" onClick={vrBtnCk}>발로란트</button>
                  <button type="button" className='gameSelect' name="lostark" onClick={loaBtnCk}>로스트아크</button>
                </li>
                <li>
                  { lol && <Lol/> }
                  { lostark && <Lostark/> }
                  { overwatch2 && <Overwatch2/> }
                  { valorant && <Valorant/> }
                </li>
                <li><input type='submit' value='팀 만들기' id='newBtn'></input></li>
              </ul>
        </form>
      </div>
    )
  }

export default NewTeam