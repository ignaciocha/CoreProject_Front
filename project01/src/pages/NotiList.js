import Toast from 'react-bootstrap/Toast'
import axios from 'axios'
import { config } from '@fullcalendar/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NotiList = ({item, show, notiList, setNotiList}) => {

    const [notiName, setNotiName] = useState('');
    const navigate = useNavigate();

    const delNoti = (e) => {
        if(e.target.tagName === 'BUTTON'){
            const config = {"Content-Type": 'application/json'};

            axios.post('/api/delnoti', {
                user_id : localStorage.getItem("user_id"),
                noti_seq : item.noti_seq
            }, config)
            .then((res)=>{
                console.log(res)
                setNotiList(res.data)
                console.log(notiList)
            }).catch((error)=>console.log(error))
        }
    }

    const delNotiNavi = (e) => {
        if(e.target.className === 'toast-body'){
            const config = {"Content-Type": 'application/json'};

            axios.post('/api/delnoti', {
                user_id : localStorage.getItem("user_id"),
                noti_seq : item.noti_seq
            }, config)
            .then((res)=>{
                console.log(res)
                setNotiList(res.data)
                console.log(notiList)

                let uri = '/teamroom/'+item.team_seq
                navigate(uri)

            }).catch((error)=>console.log(error))
        }
    }

    useEffect(()=>{
        axios.post('/api/notiteamname', {
            team_seq : item.team_seq
        }, config)
        .then((res)=>{
            console.log(res.data)
            setNotiName(res.data)
        }).catch((error)=>console.log(error))
    },[])

    
  return (
    <div>
        <Toast onClose={delNoti} show={show} animation={false}>
            <Toast.Header>
                <strong className="me-auto">{item.noti_msg}</strong>
                <small>{item.noti_dt}</small>
            </Toast.Header>
                <Toast.Body onClick={delNotiNavi}>{notiName}</Toast.Body>
        </Toast>
    </div>
  )
}

export default NotiList