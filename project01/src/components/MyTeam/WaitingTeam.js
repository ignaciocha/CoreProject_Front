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
                {item.game_name ==='lol' && <img src={logo1} width='50px' className='gamelogoStyle'></img>}
                {item.game_name ==='오버워치2' && <img src={logo2} width='50px' className='gamelogoStyle'></img>}
                {item.game_name ==='발로란트' && <img src={logo3} width='50px' className='gamelogoStyle'></img>}
                {item.game_name ==='로스트아크' && <img src={logo4} width='50px' className='gamelogoStyle'></img>}
            </div>
            <div>
                <span>{item.team_name}</span>
                <span>/가입신청일{item.tm_date.substring(0,10)}</span>
            </div>
        </div>
    </div>
  )
}

export default WaitingTeam