import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { LeafPoll } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'

import ItemList from './ItemList';


const PollView = () => {

    const [poll,setPoll] = useState([]);
    const [items, setItems] = useState([]);
    const [answer,setAnswer] = useState();
    const [pollRs,setPollRs] = useState([]);

    const customTheme = {
      textColor: 'black',
      mainColor: '#00B87B',
      backgroundColor: 'rgb(255,255,255)',
      alignment: 'center'
    }
 
    useEffect(() => {
    axios.post('api/viewpoll',{
      team_seq: 32,
      vl_seq: 59
    })
    .then((res) => {
        console.log(res.data);		//정상 통신 후 응답된 메시지 출력
        setPoll(res.data);
        setItems(JSON.parse(res.data.vl_items));
        console.log(items)
    })
    .catch((error)=>{
        console.log(error);				//오류발생시 실행
})
        }, [])      


const handleItem = (choice) => {
    console.log('handleItem',choice);
    setAnswer(choice);
}


const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('api/voting',{
        vl_seq: 59,
        user_id: 'user_id 055',
        vt_result: answer
    })
    .then((response) => {
      alert("투표결과에 반영되었습니다!")
        console.log(response.data);		//정상 통신 후 응답된 메시지 출력
    })
    .catch((error)=>{
      alert("투표할 항목을 선택해주세요!")
        console.log(error);				//오류발생시 실행
})
  };

  const handleResult = (e) => {
    e.preventDefault();

    axios.post('api/polldetail',{
        vl_seq: 59,
        vt_items: items
    })
    .then((response) => {

        setPollRs(response.data);
        	//정상 통신 후 응답된 메시지 출력
        console.log(pollRs)
        
 
    })
        .catch((error)=>{
            console.log(error);				//오류발생시 실행
        })
  };

  const handleRs = () => {

    // setPollRs(items.concat({item : "" , vote: ""}))


    axios.post('api/polldetail',{
      vl_seq: 59,
      vt_items: items
  })
  .then((response) => {

      setPollRs(response.data);
        //정상 통신 후 응답된 메시지 출력
      console.log(pollRs)

      const pollMap = pollRs.map((item,index)=>{ 
        const id = index; const text = item.vt_result; const vote = item.vote;});

        console.log(pollMap)

  })
      .catch((error)=>{
          console.log(error);				//오류발생시 실행
      })
};




  return (
    <div>
      <div>
        <span>{poll.vl_subject}</span>
        {items && items.map(item => <ItemList key={item} item={item} handleItem={handleItem}></ItemList> )}
              
        <div className="mt-5  ">
            <button className="focus-outline-none d-inline-block py-3 font-weight-bold focus-shadow  text-lg w-25 w-md-auto bg-success text-white px-2 shadow-lg hover-shadow-lg to-green-500 rounded-lg"
            onClick={(e) => handleSubmit(e)}>
              Submit your vote
            </button>
            <button className="focus-outline-none d-inline-block py-3 font-weight-bold focus-shadow  text-lg w-25 w-md-auto bg-success text-white px-2 shadow-lg hover-shadow-lg to-green-500 rounded-lg"
            onClick={(e) => handleResult(e)}>
                투표 결과
            </button>

            <button className="focus-outline-none d-inline-block py-3 font-weight-bold focus-shadow  text-lg w-25 w-md-auto bg-success text-white px-2 shadow-lg hover-shadow-lg to-green-500 rounded-lg"
            onClick={(e) => handleRs(e)}>
                진짜로 결과
            </button>
          </div>
      
          <LeafPoll
            type='multiple'
            question={poll.vl_subject}
            results={pollRs}
            theme={customTheme}
            onVote={handleSubmit}
            isVoted={false}
    />
    

      </div>
    </div>
  )
}

export default PollView