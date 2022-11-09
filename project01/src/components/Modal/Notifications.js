import React from 'react'
import { BsFillBellFill } from 'react-icons/bs'
import { useState } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';
import '../../styles/Noti.css'
import axios from 'axios'
import { useEffect } from 'react';
import NotiList from '../../pages/NotiList';

const Notifications = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const [notiList, setNotiList] = useState([]);
  
  useEffect(()=>{
      const config = {"Content-Type": 'application/json'};
  
      axios.post('/api/notification', {
        user_id : localStorage.getItem("user_id")
      }, config)
          .then((res)=>{
            console.log(res.config.data)
            console.log(res.data)
            setNotiList(res.data)
            }).catch((error)=>console.log(error)) 
  },[notiList.length])

return (
  <div>

    <div className='notiab'>
        <BsFillBellFill onClick={toggleShow} className="noti" color='purple'/>
    </div>
        <div className='notiCon'>
        <ToastContainer position="top-end" className="p-3">
          {notiList && notiList.map((item,idx)=>(<NotiList
            show={show} setShow={setShow} notiList={notiList} setNotiList={setNotiList}
            key={idx} item={item}></NotiList>))}
        </ToastContainer>
        </div>

    </div>
  )
}

export default Notifications