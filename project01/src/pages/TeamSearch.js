import React from 'react'
import Bubble from '../components/BubbleChart/Bubble'
import '../styles/Main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Team from '../components/MyTeam/Team'
import { BsLinkedin } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';

const TeamSearch = ({item, idx}) => {

  const [allTeam,setAllTeam] = useState([]);

  // let {team_seq} = useParams();

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
        <h3>팀 찾기</h3>
        <Bubble/>
        { allTeam.data && allTeam.data.map((item,idx)=>(<Team key={idx} item={item} idx={idx}></Team>))}
    </div>
  )
}

export default TeamSearch