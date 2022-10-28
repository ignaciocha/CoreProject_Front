import React from 'react'
import { BsFillBellFill } from 'react-icons/bs'
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import '../../styles/Noti.css'

const Notifications = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

return (
  <div>
    <div className='notiab'>
        <BsFillBellFill onClick={toggleShow} className="noti" color='purple'/>
        </div>
        <div className='notiCon'>
        <Toast onClose={toggleShow} show={show} animation={false}>
          <Toast.Header>
            <strong className="me-auto">알림</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>가입 신청 알림</Toast.Body>
        </Toast>
        </div>

   </div>
  )
}

export default Notifications