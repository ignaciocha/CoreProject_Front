import React from "react";
import "../../styles/Message.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

function Message({ talker, msg, user_icon, msg_time, isSender }) {
  return (
    <div className={`message ${isSender && "message--sent"}`}>
      <div className="message__name"> {talker} </div>
      {Number(user_icon).length > 1 ? (
        <img alt="" width="50px" src={`/${user_icon}`}></img>
      ) : (
        // <img alt="" width="50px" src="http://placeimg.com/50/50/any"></img>
        <Avatar icon={<UserOutlined />} />
      )}
      {/* <Avatar variant="square" className="message__avatar" src={user_icon} /> */}
      {/* {isSender ? (
				<ArrowRightIcon className="message__sentArrow" />
			) : (
				<ArrowLeftIcon className="message__receivedArrow" />
			)} */}
      <div className="message__info">
        <div className="message__text">{msg}</div>
      </div>
      {/* <div className="message__time"> {msg_time} </div> */}
    </div>
  );
}

export default Message;
