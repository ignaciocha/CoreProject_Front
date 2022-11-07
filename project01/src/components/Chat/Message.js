import React from 'react'
import '../../styles/Message.css'
import { Avatar } from "@material-ui/core";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

function Message({ talker, msg, user_icon, isSender}) {
  return (
    <div className={`message ${isSender && "message--sent"}`}>
        <div className='message__name' > {talker} </div>
        <Avatar variant="square" className="message__avatar" src={user_icon} />
        {isSender ? < ArrowRightIcon className="message__sentArrow" /> : < ArrowLeftIcon className="message__receivedArrow" />}
        <div className="message__info">
            <div className="message__text">{msg}</div>
        </div>
    </div>
  )
}

export default Message