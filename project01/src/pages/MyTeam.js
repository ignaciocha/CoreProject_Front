import React from 'react'
import WaitingTeam from '../components/MyTeam/WaitingTeam'
import BelongTeam from '../components/MyTeam/BelongTeam'
import teamList from '../assets/dummy/teamlist.json'
import '../styles/MyTeam.css';

const MyTeam = () => {

    let waitinglist = teamList.list.map((item,idx)=>(<WaitingTeam key={idx+item.teamName} item={item} idx={idx}></WaitingTeam>))
  
    let belonglist = teamList.list.map((item,idx)=>(<BelongTeam key={idx+item.teamName} item={item} idx={idx}></BelongTeam>))


  return (
    <div>
        <h1>내 팀 보기</h1>
        {/* 가입 중인 팀 */}
        <div>
            <h3>가입한 팀</h3>
            {belonglist}
        </div>
        
        {/* 가입 대기 중인 팀 */}
        <div>
            <h3>가입 승인 대기 중인 팀</h3>
            {waitinglist}
        </div>
             
    </div>
  )
}

export default MyTeam