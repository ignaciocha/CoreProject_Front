import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Message from "./Message";
import ChatDate from "./ChatDate";
import "../../styles/Chat.css";
import { useEffect } from "react";

import { SendOutlined } from "@ant-design/icons";

const Chat = ({ team_seq, team_name }) => {
  const inputRef = useRef(null);

  const user_id = localStorage.getItem("user_id");
  //   const user_nick = localStorage.getItem("user_nick");
  //   console.log(user_nick);
  const [chatData, setChatData] = useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    let url = `/api/chat/${Number(team_seq)}/`;
    axios
      .get(url)
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

    //     [chatData]
    //   return () => {
    //     console.log('에엥')
    //   }
  });
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [chatData.length]);
  const sendMessage = (e) => {
    let url = `/api/chat/${Number(team_seq)}/`;
    e.preventDefault();
    axios
      .post(url, {
        talker: user_id,
        msg: inputRef.current.value,
      })
      .then((response) => {
        console.log(response.data); //정상 통신 후 응답된 메시지 출력
      })
      .catch((error) => {
        console.log(error); //오류발생시 실행
      });
    inputRef.current.value = "";
  };
  return (
    <div className="app_body">
      <div className="chat">
        <div className="chat_header">
          <div className="chat_headerInfo">
            <h3>{team_name}</h3>
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
            return (
              <>
                {showDate && (
                  <ChatDate
                    date={chatData.msg_time?.toDate()}
                    showFullDate={showFullDate}
                  />
                )}
                <Message
                  talker={item.user_nick}
                  msg={item.msg}
                  msg_time={item.msg_time}
                  isSender={item.talker === user_id}
                />
              </>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="chat_footer">
        <form>
          <input ref={inputRef} type="text" />
          <button onClick={sendMessage} type="Submit">
            <SendOutlined style={{ color: "#841D9E" }} />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Chat;
