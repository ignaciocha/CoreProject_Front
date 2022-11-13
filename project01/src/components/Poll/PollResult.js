import React from "react";

const PollResult = ({ item }) => {
  return (
    <div>
      <div className="poll-item-section">
        <div className="poll-align-items-center">
          <div className="poll-item-view">
            <h4 className="poll-item-result-h">
              {item[0]}: {item[1]}표
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollResult;
