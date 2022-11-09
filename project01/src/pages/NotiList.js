import Toast from 'react-bootstrap/Toast'
import axios from 'axios'

const NotiList = ({item, show, notiList, setNotiList}) => {

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
    
  return (
    <div>
        <Toast onClose={delNoti} show={show} animation={false}>
            <Toast.Header>
                <strong className="me-auto">{item.noti_msg}</strong>
                <small>{item.noti_dt}</small>
            </Toast.Header>
                <Toast.Body>{item.noti_seq}</Toast.Body>
        </Toast>
    </div>
  )
}

export default NotiList