import axios from "axios";
import React, { useState, useEffect } from "react";
import WaitingTeam from "../components/MyTeam/WaitingTeam";
import BelongTeam from "../components/MyTeam/BelongTeam";
import "../styles/MyTeam.css";
import NoTeam from "./NoTeam";

const MyTeam = () => {
  const [belongTeam, setBelongTeam] = useState([]);
  const [waitingTeam, setWaitingTeam] = useState([]);

  useEffect(() => {
    axios
      .post("api/myteam", {
        applicant: localStorage.getItem("user_id"),
        confirm_yn: "y",
      })
      .then((res) => {
        console.log(res.data); //정상 통신 후 응답된 메시지 출력
        setBelongTeam(res.data);
      })
      .catch((error) => {
        console.log(error); //오류발생시 실행
      });
  }, []);

  useEffect(() => {
    axios
      .post("api/myteam", {
        applicant: localStorage.getItem("user_id"),
        confirm_yn: "n",
      })
      .then((res) => {
        console.log(res.data); //정상 통신 후 응답된 메시지 출력
        setWaitingTeam(res.data);
      })
      .catch((error) => {
        console.log(error); //오류발생시 실행
      });
  }, []);

  return (
    <div>
      <div className="belongTeamDiv">
        {belongTeam[0] && (
          <div>
            <h3>
              <b>참여 중인 팀</b>
            </h3>
          </div>
        )}
        <div className="belongTeamContainer">
          {belongTeam &&
            belongTeam.map((item, idx) => (
              <BelongTeam
                key={idx + item.team_name}
                item={item}
                idx={idx}
              ></BelongTeam>
            ))}
        </div>
      </div>
      <div className="waitingTeamDv">
        {waitingTeam[0] && (
          <div>
            <h3>
              <b>참여 신청한 팀</b>
            </h3>
          </div>
        )}
        <div className="waiting-container">
          {waitingTeam &&
            waitingTeam.map((item, idx) => (
              <WaitingTeam
                key={idx + item.team_name}
                item={item}
                idx={idx}
              ></WaitingTeam>
            ))}
        </div>
      </div>
      {/* 가입 중인 팀이 없는 경우 */}
      {!belongTeam[0] && !waitingTeam[0] && <NoTeam></NoTeam>}
    </div>
  );
};

export default MyTeam;
