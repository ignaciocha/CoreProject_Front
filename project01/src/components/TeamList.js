import React from 'react'
import teamList from '../assets/dummy/teamlist.json'
import Team from '../components/Team'
import Team2 from '../components/Team2'
import '../styles/Main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

let list = teamList.list.map((item,idx)=>(<Team key={idx+item.teamName} item={item} idx={idx}></Team>))


export const TeamList = () => {
  const [allTeam,setAllTeam] = useState([]);
  // let teamlist = allTeam.map((item,idx)=>(<Team2 key={idx} item={item} idx={idx}></Team2>))

  useEffect(
    () => {
      axios({
          url:'gameus/allteam',
          method: 'GET'
      }).then((res)=>{
        setAllTeam(res);
        console.log(res.data);
        })
      .catch(()=>{
        console.log('외않되!!!!')
      })
      
      }, []
  );

  return (
    <div>
        <div className='mainTeamStyle'>
            {list}
            {/* {teamlist} */}
            { allTeam.data && allTeam.data.map((item,idx)=>(<Team2 key={idx} item={item} idx={idx}></Team2>))}
        </div>
    </div>
  )
}

