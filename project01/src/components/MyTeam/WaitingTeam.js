import React from "react";
import logo1 from "../../assets/img/gameLogo/1.png";
import logo2 from "../../assets/img/gameLogo/2.png";
import logo3 from "../../assets/img/gameLogo/3.png";
import logo4 from "../../assets/img/gameLogo/4.jpg";

const WaitingTeam = ({ item, idx }) => {
  return (
    <div className="waitingTeamStyle">
      <div className="waiting-sub-con">
        <div className="waiting-team-item">
          <div className="waiting-team-logo">
            {item.team_game === "리그오브레전드" && (
              <img src={logo1} width="50px" className="gamelogoStyle"></img>
            )}
            {item.team_game === "오버워치2" && (
              <img src={logo2} width="50px" className="gamelogoStyle"></img>
            )}
            {item.team_game === "발로란트" && (
              <img src={logo3} width="50px" className="gamelogoStyle"></img>
            )}
            {item.team_game === "로스트아크" && (
              <img src={logo4} width="50px" className="gamelogoStyle"></img>
            )}
          </div>
        </div>
        <div className="teamItemTitle">
          <div className="waitingTeamText">
            <div className="waitingCancle">
              <span>{item.team_name}</span>
              <span>➖</span>
            </div>
            <span className="waiting-font-setting">
              신청일 {item.tm_date.substring(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingTeam;
