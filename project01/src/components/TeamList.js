import React from 'react'
import teamList from '../assets/dummy/teamlist.json'
import Team from '../components/Team'
import '../styles/Main.css';


let list = teamList.list.map((item,idx)=>(<Team key={idx+item.teamName} item={item} idx={idx}></Team>))

export const TeamList = () => {
  return (
    <div>
        <div className='mainTeamStyle'>
            {list}
        </div>
    </div>
  )
}

