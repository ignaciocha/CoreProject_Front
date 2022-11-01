import React, { useEffect, useState } from 'react'
import '../styles/TeamCheck.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const TeamCheck = () => {

  let {team_seq}  = useParams();

  const [oneTeam, setOneTeam] = useState('');


  useEffect(() => {  
    let url = '/api/teamcheck/'+team_seq
    const config = {"Content-Type": 'application/json'};

    axios.get(url, {},config).then((res)=>{
      setOneTeam(res.data);
      console.log(res.data);
      })
    .catch((error)=>{
      console.log(error)
    })
    }, []
);

  const teamJoinHandle = (event) => {
    event.preventDefault();

    const config = {"Content-Type": 'application/json'};

    axios.post('/api/teamjoin', {

    })
  }

  return (
    <div className='plusTeam'>
    <form onSubmit={teamJoinHandle}>
      <ul id="title" align='left'>
          <li><h3><b>{oneTeam.team_name}</b></h3></li>
          <small>팀 상세 조회</small>
      </ul>
      <table width='430px'>
        <tr>
          <td><span><b>모집중</b></span></td>
          <td>0/{oneTeam.team_max}</td>
        </tr>
        <tr>
            <td><span><b>참여 중</b></span></td>
            <td>
                {oneTeam.user_id}
            </td>
        </tr>
        <tr>
          <td><span><b>팀 설명</b></span></td>
          <td colSpan='2'><div border='1px solid black'>{oneTeam.team_content}</div></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span><b>성별</b></span></td>
          <td>
             <button type='button' className='gender'>남자</button>
             <button type='button' className='gender'>여자</button>
          </td>
        </tr>
        <tr>
          <td><span><b>연령</b></span></td>
          <td>
              <button type='button' className='age'>10대</button>
              <button type='button' className='age'>20대</button>
          </td>
        </tr>
        <tr>
            <td><span><b>플레이 게임</b></span></td>
            <td>리그오브레전드</td>
        </tr>
        <tr>
            <td><span><b>티어</b></span></td>
            <td>
                <button type='button' className='tier'>언랭크</button>
                <button type='button' className='tier'>브론즈</button>
            </td>
        </tr>
        <tr>
            <td><span><b>포지션</b></span></td>
            <td>
                <button type='button' className='position'>탑</button>
                <button type='button' className='position'>정글</button>
            </td>
        </tr>
        <tr align='center'>
            <td colSpan='2'><input type='submit' value='신청하기' id='subBtn'/></td>
            <td></td>
        </tr>
      </table>
    </form>
    </div>
  )
}

export default TeamCheck