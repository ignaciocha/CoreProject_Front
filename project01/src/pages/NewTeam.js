import React, { useState } from 'react'
import Lol from '../components/Game/Lol'
import Valorant from '../components/Game/Valorant'
import Overwatch2 from '../components/Game/Overwatch2'
import Lostark from '../components/Game/Lostark'
import '../styles/NewTeam.css'

const NewTeam = () => {

  const [view, setView] = useState(false)


    return (
      <div className='plusTeam'>
          <form action='#' method='get'>
            <ul align='left'>
                <li><h3><b>팀만들기</b></h3></li>
                <small>팀을 생성해주세요!</small>
            </ul>
            <ul>
                <li>
                  <p>팀 이름</p>
                  <input type="text" name='teamName' size='40'/>
                </li>
                <li><b>모집 인원 : </b><input type='number' name='teamMax' min='5' max='20' placeholder='5~20 사이의 값만 입력해주세요'/></li>
                <li align='left'>팀 설명</li>
                <li><textarea cols='50' rows='3'></textarea></li>
                <li>성별 남 <input type='checkbox' name='gender' value='man'/>
                        여 <input type='checkbox' name='gender' value='woman'/></li>
                <li>연령10대 <input type='checkbox' name='age' value='10'/>
                        20대 <input type='checkbox' name='age' value='20'/>
                        30대 <input type='checkbox' name='age' value='30'/>
                        40대 <input type='checkbox' name='age' value='40'/>
                        50대 이상 <input type='checkbox' name='age' value='50'/></li>
                <li>플레이 게임</li>
                <li>
                  <button type="button" className='gameSelect' name="lol" onClick={()=>setView(true)}>리그오브레전드</button>
                  <button type="button" className='gameSelect' name="overwatch2" onClick={()=>setView(true)}>오버워치2</button>
                  <button type="button" className='gameSelect' name="valorant" onClick={()=>setView(true)}>발로란트</button>
                  <button type="button" className='gameSelect' name="lostark" onClick={()=>setView(true)}>로스트아크</button>
                </li>
      <li>
        {view && <Lol/> }
        {view && <Lostark/> }
        {view && <Valorant/> }
        {view && <Overwatch2/> }

      </li>
      <li><input type='submit' value='팀 만들기' id='new'></input></li>
</ul>
          </form>
      </div>
    )
  }

export default NewTeam