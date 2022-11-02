import React from 'react'
import Bubble from '../components/BubbleChart/Bubble'
import '../styles/Main.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Team from '../components/MyTeam/Team'

const TeamSearch = ({item, idx}) => {

  const [allTeam,setAllTeam] = useState([]);
  const [filterTeam, setFilterTeam] = useState([]);


  // let {team_seq} = useParams();

  useEffect(() => {
      axios({
          url:'/api/allteam',
          method: 'get'
      }).then((res)=>{
        console.log(res.data);
        setAllTeam(res);
        })
      .catch((error)=>{
        console.log(error)
      })
      }, []
  );
  
  const teamList = () => {
    
    allTeam.data.map((item,idx)=>(<Team key={idx} item={item} idx={idx}></Team>))
  }

  // const filterData = () => {
  //   if(filterTeam === undefined) {
  //     teamList()
  //   }else {
  //     let newData = allTeam.data.filter(i => {
        
  //     })
  //   }
  // }

  return (
    <div>
        <h3>팀 찾기</h3>
        <Bubble setFilterTeam={setFilterTeam}/>
        {teamList}
    </div>
  )
}

export default TeamSearch