import React from 'react'
import PollList from './PollList';
import Leaf from './Leaf';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Table } from 'antd';

const PollMain = () => {

  const [index,setIndex] = useState(1);
  const [allPoll,setAllPoll] = useState([]);

  useEffect(
    () => {
      axios({
          url:'api/allpoll',
          method: 'GET'
      }).then((res)=>{
        setAllPoll(res.data);
        console.log(res.data);
        // console.log(JSON.parse(res.data));
        })
      .catch(()=>{
        console.log('생성된 투표가 없는디요')
      })
      
      }, []
  );

  const columns = [
    {
      title: '투표제목',
      dataIndex: 'vl_subject'
    },
    {
      title: '시작일',
      dataIndex: 'reg_date'
    },    
    {
      title: '종료일',
      dataIndex: 'vl_end_dt'
    }
  ];


  return (
    <div>투표창 메인
        {/* 가장 최신 투표 출력*/}


        {/* 전체 투표 리스트*/}

        <Table columns={columns} dataSource={allPoll} size="small" />


        {/* 만들어진 투표가 하나도 없을 경우*/}

        <button>새 투표</button>

    <Leaf></Leaf>
    </div>
  )
}

export default PollMain