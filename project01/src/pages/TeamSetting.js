import React from "react";
import TeamMember from "../components/ManageMember/TeamMember";
import "../styles/ManageMember.css";

const TeamSetting = () => {
  return (
    <div>
      <div className="settingBox"></div>
      <div className="settingTeamName"></div>
      <TeamMember></TeamMember>
    </div>
  );
};

export default TeamSetting;
