import React, { useEffect, useState } from "react";
import Team from "../components/MyTeam/Team";
import "../styles/Main.css";
import axios from "axios";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

export const TeamList = () => {
  const [allTeam, setAllTeam] = useState([]);
  const [almostTeam, setAlmostTeam] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios({
      url: "/api/allteam",
      method: "get",
    })
      .then((res) => {
        // setAllTeam(res);
        console.log(res.data);

        // 메인 노출 팀 필터
        setAllTeam(res.data.slice(0, 10));
        setAlmostTeam(
          res.data.filter(
            (data) =>
              data.team_max - data.member_count <= 2 &&
              data.team_max - data.member_count > 0
          )
        );
        console.log(almostTeam);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(!open);
  }, []);

  AOS.init();

  return (
    <div>
      <div>
        <div className="mainArticle">
          <h3 className="mainH3">
            <b>정원 마감이 얼마 남지 않은 팀</b>📢
          </h3>
        </div>
        <ul className="mainTeamStyle">
          {almostTeam &&
            almostTeam.map((item, idx) => (
              <li>
                <Team key={idx + item} item={item} idx={idx}></Team>
              </li>
            ))}
        </ul>
      </div>
      <div className="mainArticle">
        <h3 className="mainH3">
          <b>최근에 모집을 시작한 팀👀</b>
        </h3>

        <Link to={"/teamsearch"}>
          <button className="mainMoreBtn">더보기</button>
        </Link>
      </div>
      <div>
        <ul className="mainTeamStyle">
          {allTeam &&
            allTeam.map((item, idx) => (
              <li>
                <Team key={idx + item} item={item} idx={idx}></Team>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
