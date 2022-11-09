import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Message from './Message';
import ChatDate from './ChatDate';

import '../../styles/Chat.css'

import { useEffect } from 'react';

const Chat = () => {
	const { team_seq } = useParams;
	const inputRef = useRef(null);
	const [teamName, setTeamName] = useState('룰루랄라');
	const [talker, setTalker] = useState('ㅎㅇ');
	const [cr_seq, setCr_seq] = useState(5);
	const [chatData, setChatData] = useState([]);
	const [user_id, setUser_id] = useState('test');

	const messagesEndRef = useRef(null);

	useEffect(() => {
		axios
			.post('api/chat/receive', {
				cr_seq: cr_seq,
			})
			.then((res) => {
				console.log(res.data); //정상 통신 후 응답된 메시지 출력
				setChatData(res.data);
			})
			.catch(
				(error) => {
					console.log(error); //오류발생시 실행
				},
				[chatData]
			);

    useEffect(()=>{
        let url = '/api/chat/receive'
        axios.post(url,{
            cr_seq: cr_seq
          })
          .then((res) => {
              console.log(res.data);		//정상 통신 후 응답된 메시지 출력
            setChatData(res.data);
            })
          .catch((error)=>{
              console.log(error);				//오류발생시 실행
            
      },[chatData])

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView();
	}, [chatData]);

	const sendMessage = (e) => {
		e.preventDefault();
		axios
			.post('api/chat/send', {
				talker: talker,
				msg: inputRef.current.value,
				cr_seq: cr_seq,
				//user_icon도 같이 보내버리는 편이 나을 수도?
			})
			.then((response) => {
				console.log(response.data); //정상 통신 후 응답된 메시지 출력
			})
			.catch((error) => {
				console.log(error); //오류발생시 실행
			});

		inputRef.current.value = '';
	};

	return (
		<div className="app_body">
			<div className="chat">
				<div className="chat_header">
					<div className="chat_headerInfo">
						<h3>{teamName}</h3>
					</div>
				</div>

				<div className="chat_body">
					{chatData.map((item, index) => {
						const prevMessage = chatData[index - 1];
						const showDate =
							!prevMessage ||
							chatData?.msg_time?.seconds - prevMessage?.msg_time?.seconds > 60;
						const dateNow = new Date();
						const showFullDate =
							dateNow.getDate() !== chatData.msg_time?.toDate().getDate() ||
							dateNow.getMonth() !== chatData.msg_time?.toDate().getMonth() ||
							dateNow.getYear() !== chatData.msg_time?.toDate().getYear();

    const sendMessage = (e) => {
        let url = '/api/chat/send'
        e.preventDefault();
        axios.post(url,{
          talker: talker,
          msg: inputRef.current.value,
          cr_seq: cr_seq
        //user_icon도 같이 보내버리는 편이 나을 수도?
        }
        )
        .then((response) => {
            console.log(response.data);		//정상 통신 후 응답된 메시지 출력

					<div ref={messagesEndRef} />
				</div>
			</div>

			<div className="chat_footer">
				<form>
					<input ref={inputRef} type="text" />
					<button onClick={sendMessage} type="Submit"></button>
				</form>
			</div>
		</div>
	);
};


  return (
    <div className='app_body'>
        <div className='chat'>
            <div className='chat_header'>
                <div className='chat_headerInfo'>
                <h3>{teamName}</h3>
                </div>

            </div>
            
            <div className='chat_body'>


                {chatData.map((item, index)=> {
                    const prevMessage = chatData[index-1];
                    const showDate = !prevMessage || (chatData?.msg_time?.seconds - prevMessage?.msg_time?.seconds) > 60;
                    const dateNow = new Date();
                    const showFullDate = ((dateNow.getDate() !== chatData.msg_time?.toDate().getDate()) ||
                        (dateNow.getMonth() !== chatData.msg_time?.toDate().getMonth()) ||
                        dateNow.getYear() !== chatData.msg_time?.toDate().getYear())

                    return (
                    <>
                    {showDate && <ChatDate date={chatData.msg_time?.toDate()} showFullDate={showFullDate} />}
                    <Message talker={item.talker}
                                    msg={item.msg}
                                    msg_time={item.msg_time}
                                    isSender={item.talker === user_id}/>
                    </>
                )
                })}

            <div ref={messagesEndRef} />

        </div>
        
            </div>

        <div className="chat_footer">
                <form>
                    <input ref={inputRef} type="text" />
                    <button onClick={sendMessage} type="Submit"></button>
                </form>
                전송버튼
        </div>


    </div>
  )
}

export default Chat
