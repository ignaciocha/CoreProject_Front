import React from 'react'
import Team from './Team';
import '../styles/Main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const TeamList = () => {
  const [allTeam,setAllTeam] = useState([]);

  useEffect(
    () => {
      axios({
          url:'api/allteam',
          method: 'get'
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
            {allTeam.data && allTeam.data.map((item,idx)=>(<Team key={idx} item={item} idx={idx}></Team>))}
        </div>
    </div>
  )
}

