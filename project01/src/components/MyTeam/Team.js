import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/img/gameLogo/1.png";
import logo2 from "../../assets/img/gameLogo/2.png";
import logo3 from "../../assets/img/gameLogo/3.png";
import logo4 from "../../assets/img/gameLogo/4.jpg";
import "../../styles/TeamList.css";

import { Tag } from "antd";

const Team = ({ item, idx }) => {
  let urlSource = "/teamcheck/" + item.team_seq;
  const content = item.team_content;
  let position = "";
  let td = "";
  try {
    position = JSON.parse(item.team_position);
    td = JSON.parse(item.team_td);
  } catch {
    position = item.team_position;
    td = item.team_td;
  }

  return (
    <div data-aos="fade-up" className="teamBox">
      <Link className="linkTextStyle" to={urlSource}>
        <div className="teamItemStyle">
          <div className="teamIntroStyle">
            <div className="gameLogoStyle">
              {item.team_game === "리그오브레전드" && (
                <img src={logo1} width="50px" className="imgStyle"></img>
              )}
              {item.team_game === "오버워치2" && (
                <img src={logo2} width="50px" className="imgStyle"></img>
              )}
              {item.team_game === "발로란트" && (
                <img src={logo3} width="50px" className="imgStyle"></img>
              )}
              {item.team_game === "로스트아크" && (
                <img src={logo4} width="50px" className="imgStyle"></img>
              )}
            </div>
            <div className="teamTextStyle">
              <div className="teamTextLineStyle">
                <strong className="team-name">{item.team_name} </strong>
                <span>
                  ({item.member_count}/{item.team_max})
                </span>
                <p>{/* <span>팀장 {item.user_id}</span> */}</p>
                <p>
                  {content.length > 24
                    ? content.substring(0, 23) + " ..."
                    : content}
                </p>
              </div>

              <span>
                {position.map((item, idx) => (
                  <Tag key={idx} item={item} idx={idx}>
                    {item}
                  </Tag>
                ))}
              </span>
              <span>
                {td.map((item, idx) => (
                  <Tag color="purple" key={idx} item={item} idx={idx}>
                    {item}
                  </Tag>
                ))}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Team;
