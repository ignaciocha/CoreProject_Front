import React, { useEffect, useState } from 'react'
import teamList from '../assets/dummy/teamlist.json'
import Team from '../components/MyTeam/Team'
import '../styles/Main.css';
import axios from 'axios';

export const TeamList = () => {

  const [allTeam,setAllTeam] = useState([]);

  useEffect(() => {
      axios({
          url:'/api/allteam',
          method: 'get'
      }).then((res)=>{
        setAllTeam(res);
        console.log(res.data);
        })
      .catch((error)=>{
        console.log(error)
      })
      }, []
  );

  return (
    <div>
        <div className='mainTeamStyle'>
        { allTeam.data && allTeam.data.map((item,idx)=>(<Team key={idx} item={item} idx={idx}></Team>))}
        </div>
    </div>
  )
}

