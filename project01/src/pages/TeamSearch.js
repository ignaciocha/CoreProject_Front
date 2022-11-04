import React from "react";
import Bubble from "../components/BubbleChart/Bubble";
import "../styles/Main.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Team from "../components/MyTeam/Team";

const TeamSearch = ({ item, idx }) => {
  const [allTeam, setAllTeam] = useState();
  const [filterTeam, setFilterTeam] = useState([]);

  // let {team_seq} = useParams();

  useEffect(() => {
    axios({
      url: "/api/allteam",
      method: "get",
    })
      .then((res) => {
        setAllTeam(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

//   const filterTeam.map(i => {
//   if(i)
// })
  const newFilterData = [];
  useEffect(() => {
    
      console.log('바꿀 값: ', allTeam);
      axios.get('/api/teamsearch/filter', {
        params: {
          id: filterTeam.join(',')
        }
      })
      .then(e => {

        console.log('새값:', e.data);
        // 이름 필터링
        let nameFilter = allTeam.filter(i => i.team_game === e.data[0].game_name)
        try {
          // 티어, 포지션 파싱
          nameFilter.map(i => i.team_td = JSON.parse(i.team_td));
          // 포지션 파싱
          nameFilter.map(i => i.team_position = JSON.parse(i.team_position));
          console.log('필터1: ', nameFilter);
        } catch {
        }
        let tdFilter = nameFilter.filter(i => i.team_td.includes(e.data.map(i => i.game_detail)))
        
        console.log('필터2: ', tdFilter);

        // console.log('필터2: ', tdFilter);
        
      })
    
    
  }, [filterTeam])
  

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
      <Bubble setFilterTeam={setFilterTeam} filterTeam={filterTeam} />
      {allTeam && allTeam.map((item, idx) => <Team item={item} key={idx}/>)}
    </div>
  );
};

export default TeamSearch;
