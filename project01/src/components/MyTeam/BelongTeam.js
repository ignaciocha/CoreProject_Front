import React from 'react'
import logo1 from '../../assets/img/gameLogo/1.png'
import logo2 from '../../assets/img/gameLogo/2.png'
import logo3 from '../../assets/img/gameLogo/3.png'
import logo4 from '../../assets/img/gameLogo/4.jpg'
import {Link} from 'react-router-dom'

const BelongTeam = ({item, idx}) => {
  const linkStyle = {
    textDecoration: 'none'
  };

  return (
    <div className='waitingTeamStyle'>
        <Link style={linkStyle} className = 'linkTextStyle' to={'/teamroom'+item.team_seq}>
        <div className='teamItemTitle'>
            <div>
                {item.game_name ==='lol' && <img src={logo1} width='50px' className='gamelogoStyle'></img>}
                {item.game_name  ==='오버워치2' && <img src={logo2} width='50px' className='gamelogoStyle'></img>}
                {item.game_name ==='발로란트' && <img src={logo3} width='50px' className='gamelogoStyle'></img>}
                {item.game_name ==='로스트아크' && <img src={logo4} width='50px' className='gamelogoStyle'></img>}
            </div>
            <div>
                <span>{item.team_name}</span>
                <span></span>
                <span></span>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default BelongTeam