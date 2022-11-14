import React, { useEffect, useRef, useState } from 'react'
import '../styles/TeamCheck.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import JoinCheckModal from '../components/Modal/JoinCheckModal';
// import Modal from '../components/Modal/Modal';


const TeamCheck = () => {

  let {team_seq}  = useParams();

  const [oneTeam, setOneTeam] = useState('');
  const [teamM, setTeamM] = useState('');
  const [teamAge, setTeamAge] = useState([]);
  const [teamTD, setTeamTD] = useState([]);
  const [teamPosition, setTeamPosition] = useState([]);

  useEffect(() => {  
    let url = '/api/teamcheck/'+team_seq
    const config = {"Content-Type": 'application/json'};

    axios.post(url, {
        team_seq : Number(team_seq),
        user_id : localStorage.getItem("user_id")
      }
    ,config).then((res)=>{
      setOneTeam(res.data.selectOneTeam);
      setTeamM(res.data.selectTm);
      setTeamAge(JSON.parse(res.data.selectOneTeam.team_age))
      setTeamTD(JSON.parse(res.data.selectOneTeam.team_td))
      setTeamPosition(JSON.parse(res.data.selectOneTeam.team_position))
      setIsJoined(res.data.isJoined)
      console.log(res.data.selectOneTeam);
      console.log(res.data.selectTm);
      console.log(res.data.isJoined);

      console.log('전부:',res);
      })
    .catch((error)=>{
      console.log(error)
    })
    }, []
);


  const [isJoined, setIsJoined] = useState()
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(()=>{

  //     const handler = (e) => {
  //         if(modalRef.current && !modalRef.current.contain(e.target)){
  //             setIsOpen(false);
  //         }
  //     }
  // },[])

  const teamJoinHandle = (event) => {
    event.preventDefault();
    const config = {"Content-Type": 'application/json'};

    if(isJoined === 0){
      axios.post('/api/teamjoin', {
        team_seq : Number(team_seq),
        user_id : localStorage.getItem("user_id")
      }, config).then((res)=>{
        console.log(res.config.data)
        console.log(res);
        console.log(res.data)
        setIsJoined(res.data)
      }).catch((error)=>{
        console.log(error);
      })
    }else if(isJoined === 'n'){
      setIsOpen(true)
    }else if(isJoined === 'y'){
      // alert('팀 룸으로 보내주기!!')
      let url = '/teamroom/'+team_seq

      navigate(url)
    }
  }



  return (
    <div className='plusTeam'>
    <form onSubmit={teamJoinHandle}>
      <table width='430px'>
        <tr>
          <td>
            <small>팀 상세 조회</small>
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <h3 className='teamCkH3'><b>{oneTeam.team_name}</b></h3>
          </td>
        </tr>
        <tr>
          <td>
            {teamM===oneTeam.team_max?
            <span id='newTeamSpan'><b>모집 완료</b></span>:
            <span id='newTeamSpan'><b>모집 중</b></span>}
          </td>
          <td>{teamM}/{oneTeam.team_max}</td>
        </tr>
        <tr>
            <td><span id='newTeamSpan'><b>방장 닉네임</b></span></td>
            <td>
                {oneTeam.user_nick}
            </td>
        </tr>
        <tr>
          <td><span id='newTeamSpan'><b>팀 설명</b></span></td>
          <td colSpan='2'><div border='1px solid black'>{oneTeam.team_content}</div></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span id='newTeamSpan'><b>성별</b></span></td>
          <td>
             <button type='button' className='gender'>{oneTeam.team_gender}</button>
          </td>
        </tr>
        <tr>
          <td><span id='newTeamSpan'><b>연령</b></span></td>
          <td>
              {teamAge.map((item)=>(<button type='button' key={item} className='age'>{item}</button>))}
          </td>
        </tr>
        <tr>
            <td><span id='newTeamSpan'><b>플레이 게임</b></span></td>
            <td>{oneTeam.team_game}</td>
        </tr>
        <tr>
            <td><span id='newTeamSpan'><b>{oneTeam.team_game==='로스트아크'?'던전':'티어'}</b></span></td>
            <td>
              {teamTD.map((item)=>(<button type='button' key={item} className='tier'>{item}</button>))}
            </td>
        </tr>
        <tr>
            <td><span id='newTeamSpan'><b>포지션</b></span></td>
            <td>
              {teamPosition.map((item)=>(<button type='button' key={item} className='position'>{item}</button>))}
            </td>
        </tr>
        <tr align='center'>
            <td colSpan='2'>
              {isJoined === 'n' ?
              <input type='submit' value='이미 신청한 팀입니다' id='subBtn2'/>
              : isJoined === 'y'?
              <input type='submit' value='이미 참여중인 팀입니다' id='subBtn'/> : 
              <input type='submit' value='신청하기' id='subBtn'/>}
            </td>
            <td></td>
        </tr>
      </table>
    </form>

    <JoinCheckModal isOpen={isOpen}
				onClose={() => setIsOpen(false)}/>
    </div>
  )
}

export default TeamCheck