import React from 'react'
import logo1 from '../../assets/img/gameLogo/1.png'
import logo2 from '../../assets/img/gameLogo/2.png'
import logo3 from '../../assets/img/gameLogo/3.png'
import logo4 from '../../assets/img/gameLogo/4.jpg'

const WaitingTeam = ({item, idx}) => {
  return (
    <div className='waitingTeamStyle'>
        <div>
            <div>
                {item.gameName ==='lol' && <img src={logo1} width='50px' className='imgStyle'></img>}
                {item.gameName ==='오버워치2' && <img src={logo2} width='50px' className='imgStyle'></img>}
                {item.gameName==='발로란트' && <img src={logo3} width='50px' className='imgStyle'></img>}
                {item.gameName==='로스트아크' && <img src={logo4} width='50px' className='imgStyle'></img>}
            </div>
            <div>
                <span>{item.teamName}</span>
                <span>/가입신청일</span>
            </div>
        </div>
    </div>
  )
}

export default WaitingTeam