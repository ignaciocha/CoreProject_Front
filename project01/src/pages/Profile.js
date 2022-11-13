import React, { useEffect } from 'react'
import '../styles/Profile.css'
import axios from 'axios'
import { useState } from 'react'
import GameDetail from '../components/Profile/GameDetail'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState([
        {
            game_category: 0,
            user_birthdate: '',
            user_favor: 0,
            user_gender: '',
            user_icon: '',
            user_joindate: '',
            user_nick: '' 
        }
    ])

    var str = decodeURI(window.location.search);
    console.log("현재 주소: ",str);

    const params = new URLSearchParams(str);
    const proDetail = { user_nick: params.get("user_nick") };
    console.log("너야?2", proDetail);
    
    const [gameInfo, setGameInfo] = useState([]);

    
    useEffect(()=>{
        axios.post('/api/profile', proDetail
        ).then((res)=>{
            let userGameInfo = [];

            console.log(res)
            setUserInfo(res.data)
            console.log(res.data)
            for(var i=0; i<res.data.length; i++){
                userGameInfo.push(res.data[i].game_category);
            }

            setGameInfo(userGameInfo);
        })
            .catch((error)=>console.log(error))
        },[])
        
        console.log('게임정보', gameInfo)

        const [myGame, setMyGame] = useState([])
        
        useEffect(()=>{

            axios.post('/api/usergame', gameInfo
                ).then((res)=>{
                console.log('보내는 값',res.config.data)
                console.log('받아오는 값',res.data)
                setMyGame(res.data)
            }).catch((error)=>(console.log(error)))

        },[gameInfo])


        const goBack = () => {
            navigate(-1)
        }

  return (
    <div className='profileFlex'>
        <div className='profileBox'>
            <div className='profileTitle'>
            💜{userInfo && userInfo[0].user_nick}님의 Profile💜
            </div>
            <div className='imgDiv'>
            <img className='profileImg' src={`/${userInfo && userInfo[0].user_icon}`}></img>
            </div>
            <div className='myDetail'>
                <span className='leftSpan'>닉네임</span>
                    <span className='rightSpan'>
                      {userInfo && userInfo[0].user_nick}
                    </span>

                <span className='leftSpan'>성별</span>
                    <span className='rightSpan'>
                        {userInfo && userInfo[0].user_gender}
                    </span>

                <span className='leftSpan'>연령대</span>
                    <span className='rightSpan'>
                        {userInfo && userInfo[0].user_birthdate}
                    </span>

                <span className='leftSpan'>호감도</span>
                    <span className='rightSpan'>
                      {userInfo && userInfo[0].user_favor} POINT
                    </span>

                
                {/* {userInfo && userInfo[0].user_joindate} */}
            </div>
            <div>
                {/* {myGame && myGame.map((item)=><span key={item} item={item}>{item.game_name}</span>)} */}
                <GameDetail myGame={myGame}/>
            </div>
                <button className='goBackBtn' onClick={goBack}>돌아가기</button>
            </div>
    </div>
  )
}

export default Profile