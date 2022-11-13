import React, { useEffect } from 'react'
import '../styles/Profile.css'
import axios from 'axios'
import { useState } from 'react'
import GameDetail from '../components/Profile/GameDetail'

const Profile = () => {

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




  return (
    <div className='profileFlex'>
        <div className='profileBox'>
            <div>
                Profile
            </div>
            <div>
             {/* {userInfo[0].user_nick}
             {userInfo.game_category} */}

            <img className='profileImg' src={`/${userInfo && userInfo[0].user_icon}`}></img>
                {userInfo && userInfo[0].user_nick}
                {userInfo && userInfo[0].user_gender}
                {userInfo && userInfo[0].user_favor}
                {userInfo && userInfo[0].user_joindate}
                {userInfo && userInfo[0].user_birthdate}

                {userInfo && userInfo.map((item, idx)=>(<span key={item+idx} item={item}>{item.game_category}</span>))}
            </div>
            <div>
                {/* {myGame && myGame.map((item)=><span key={item} item={item}>{item.game_name}</span>)} */}
                <GameDetail myGame={myGame} setMyGame={setMyGame}/>
            </div>
        </div>
    </div>
  )
}

export default Profile