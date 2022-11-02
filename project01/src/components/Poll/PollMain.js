import React from 'react'
import PollList from './PollList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PollMain = () => {

  const [allPoll,setAllPoll] = useState([]);

  useEffect(
    () => {
      axios({
          url:'api/allpoll',
          method: 'GET'
      }).then((res)=>{
        setAllPoll(res);
        console.log(res.data);
        // console.log(JSON.parse(res.data));
        })
      .catch(()=>{
        console.log('생성된 투표가 없는디요')
      })
      
      }, []
  );

  return (
    <div>투표창 메인
        {/* 가장 최신 투표 출력*/}


        {/* 전체 투표 리스트*/}
        { allPoll.data && 
        <li>번호 
          투표제목 
          시작일~종료일</li>}
        {allPoll.data && allPoll.data.map((item,idx)=>(<PollList key={idx} item={item} idx={idx}></PollList>))}


        {/* 만들어진 투표가 하나도 없을 경우*/}

        <button>새 투표</button>

    </div>
  )
}

export default PollMain