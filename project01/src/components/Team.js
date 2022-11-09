import { normalizeUnits } from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/img/gameLogo/1.png'
import logo2 from '../assets/img/gameLogo/2.png'
import logo3 from '../assets/img/gameLogo/3.png'
import logo4 from '../assets/img/gameLogo/4.jpg'
import TeamCheck from '../pages/TeamCheck'
import '../styles/TeamList.css'

const Team = ({item, idx}) => {
  const containerStyle = {
    border : '1px solid gray',
    display : 'flex',
    flexDirection: 'column',
    width: '500px',
    borderRadius: '15px',
    margin: '10px',
    boxShadow: '1px 1px 10px -2px gray',
    padding: '10px',
  }

  
  return (
    <div style={containerStyle}>
      <Link className='linkTextStyle' to={'/teamcheck/'+item.team_seq}>
        <div className = 'teamItemStyle'>
          <div>
          {item.team_game ==='리그오브레전드' && <img src={logo1} width='50px' className='imgStyle'></img>}
          {item.team_game ==='오버워치2' && <img src={logo2} width='50px' className='imgStyle'></img>}
          {item.team_game==='발로란트' && <img src={logo3} width='50px' className='imgStyle'></img>}
          {item.team_game==='로스트아크' && <img src={logo4} width='50px' className='imgStyle'></img>}
          </div>
        <div>
        <span>팀명: {item.team_name}</span>
        <br></br>
        <span>팀 개설일: {item.team_opendate} </span><br></br>
        <span>팀 설명: {item.team_content}</span><br></br>
        <span>팀 정원: {item.team_max}</span><br></br>
        <span>팀장: {item.user_id}</span><br></br>
            </div>

          </div>
        </Link>
      </div>
  )
}

export default Team
