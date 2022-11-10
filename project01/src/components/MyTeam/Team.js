import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/img/gameLogo/1.png';
import logo2 from '../../assets/img/gameLogo/2.png';
import logo3 from '../../assets/img/gameLogo/3.png';
import logo4 from '../../assets/img/gameLogo/4.jpg';

const Team = ({ item, idx }) => {
  const containerStyle = {
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
    width: "400px",
    height: "190px",
    borderRadius: "15px",
    margin: "10px",
    boxShadow: "1px 1px 10px -2px gray",
    padding: "10px",
  };

  let urlSource = "/teamcheck/" + item.team_seq;

  return (
    <div style={containerStyle}>
      <Link className="linkTextStyle" to={urlSource}>
        <div className="teamItemStyle">
          <div>
            {item.gameName ==='lol' && <img src={logo1} width='50px' className='imgStyle'></img>}
          {item.gameName ==='오버워치2' && <img src={logo2} width='50px' className='imgStyle'></img>}
          {item.gameName==='발로란트' && <img src={logo3} width='50px' className='imgStyle'></img>}
          {item.gameName==='로스트아크' && <img src={logo4} width='50px' className='imgStyle'></img>}
          </div>
          <div>
            <span>{item.team_name}</span>
            <br></br>
            <span>{item.team_opendate} </span>
            <br></br>
            <span>{item.team_content}</span>
            <br></br>
            <span>{item.team_max}</span>
            <br></br>
            <span>{item.user_id}</span>
            <br></br>
            <span>{item.user_id}</span>
            <br></br>
            <span>{item.user_id}</span>
            <br></br>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Team;
