import React, { useEffect, useState } from "react";
import Team from "../components/MyTeam/Team";
import "../styles/Main.css";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";

export const TeamList = () => {
  const [allTeam, setAllTeam] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios({
      url: "/api/allteam",
      method: "get",
    })
      .then((res) => {
        setAllTeam(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(!open);
  }, []);

  AOS.init();

  return (
    <div>
      <ul className="mainTeamStyle">
        {allTeam.data &&
          allTeam.data.map((item, idx) => (
            <li>
              <Team key={idx + item} item={item} idx={idx}></Team>
            </li>
          ))}
      </ul>
    </div>
  );
};
