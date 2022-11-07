import React from 'react'
// import Poll from 'react-polls';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './ItemList';


const PollView = () => {

    const [poll,setPoll] = useState([]);
    const [items, setItems] = useState([]);
    const [answer,setAnswer] = useState();
    const [pollRs,setPollRs] = useState([]);
 
    useEffect(() => {
    axios.post('api/viewpoll',{
      team_seq: 32,
      vl_seq: 42
    })
    .then((res) => {
        console.log(res.data);		//정상 통신 후 응답된 메시지 출력
        setPoll(res.data);
        setItems(JSON.parse(res.data.vl_items));
    })
    .catch((error)=>{
        console.log(error);				//오류발생시 실행
})
        }, [])      

  // Handling user vote
  // Increments the votes count of answer when the user votes

//   const handleVote = (e) => {
//     const { pollAnswers } = this.state
//     const newPollAnswers = pollAnswers.map(answer => {
//       if (answer.option === voteAnswer) answer.votes++
//       return answer
//     })
//     this.setState({
//       pollAnswers: newPollAnswers
//     })
//   }

const handleItem = (choice) => {
    console.log('handleItem',choice);
    setAnswer(choice);
}


const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('api/voting',{
        vl_seq: 42,
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
        vl_seq: 42,
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

   console.log(pollRs)
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
      
      </div>
    </div>
  )
}

export default PollView