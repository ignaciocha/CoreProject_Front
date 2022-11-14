import React from "react";
import logo1 from "../../assets/img/gameLogo/1.png";
import logo2 from "../../assets/img/gameLogo/2.png";
import logo3 from "../../assets/img/gameLogo/3.png";
import logo4 from "../../assets/img/gameLogo/4.jpg";
import { Link } from "react-router-dom";

const BelongTeam = ({ item, idx }) => {
  const linkStyle = {
    textDecoration: "none",
  };

  const user = localStorage.getItem("user_id");

  return (
    <div>
      <Link
        style={linkStyle}
        className="linkTextStyle"
        to={"/teamroom/" + item.team_seq}
      >
        <div className="teamItemTitle">
          <div className="belongTeamStyle">
            <div className="waiting-sub-con">
              <div className="waiting-team-item">
                <div className="waiting-team-logo">
                  {item.team_game === "리그오브레전드" && (
                    <img
                      src={logo1}
                      width="50px"
                      className="gamelogoStyle"
                    ></img>
                  )}
                  {item.team_game === "오버워치2" && (
                    <img
                      src={logo2}
                      width="50px"
                      className="gamelogoStyle"
                    ></img>
                  )}
                  {item.team_game === "발로란트" && (
                    <img
                      src={logo3}
                      width="50px"
                      className="gamelogoStyle"
                    ></img>
                  )}
                  {item.team_game === "로스트아크" && (
                    <img
                      src={logo4}
                      width="50px"
                      className="gamelogoStyle"
                    ></img>
                  )}
                </div>
              </div>
              <div className="teamItemTitle">
                <div className="waitingTeamText">
                  <div className="belongLeader">
                    <span>{item.team_name}</span>
                    {user == item.user_id && <span>👑</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BelongTeam;
