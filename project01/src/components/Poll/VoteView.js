import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/PollMain.css";

import ItemList from "./ItemList";
import PollResult from "./PollResult";

const VoteView = ({ item, poll, team_seq }) => {
  const [items, setItems] = useState([]);
  const [answer, setAnswer] = useState();
  const [pollRs, setPollRs] = useState([]);
  const [voting, setVoting] = useState();

  const [resultCk, setResultCk] = useState(false);

  console.log(item);
  console.log(poll.vl_seq);

  const [render, setRender] = useState(false);
  const [possible, setPossible] = useState(true);

  useEffect(() => {
    setVoting("");
    setAnswer();
    setResultCk(false);
    setPollRs(0);
    setPossible(true);

    let url = "/api/pollresult";
    axios
      .post(url, {
        vl_seq: poll.vl_seq,
        vt_items: item,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setPollRs(response.data);
        //정상 통신 후 응답된 메시지 출력
        console.log(pollRs);
        handleRs(response.data);
        dateCk();
        {
          !possible ? setResultCk(true) : setResultCk(false);
        }
      })
      .catch((error) => {
        console.log(error); //오류발생시 실행
      });
  }, [poll, render]);

  const handleItem = (choice) => {
    console.log("handleItem", choice);
    setAnswer(choice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let url = "/api/voting";
    axios
      .post(url, {
        vl_seq: poll.vl_seq,
        user_id: localStorage.getItem("user_id"),
        vt_result: answer,
      })
      .then((response) => {
        alert("투표결과에 반영되었습니다!");
        console.log(response.data); //정상 통신 후 응답된 메시지 출력
        setRender(!render);
        setPossible(false);
        poll.vt_count++;
      })
      .catch((error) => {
        alert("투표할 항목을 선택해주세요!");
        console.log(error); //오류발생시 실행
      });
  };

  const handleResult = (e) => {
    e.preventDefault();
    setResultCk(true);
  };

  const handleRs = (pollRs) => {
    console.log(pollRs);
    console.log(Object.entries(pollRs));
    setVoting(
      Object.entries(pollRs).map((item, idx) => (
        <PollResult key={item + idx} item={item}></PollResult>
      ))
    );
  };

  // 투표종료일 이전인지 체크
  const dateCk = () => {
    var date = new Date();
    var year = date.getFullYear(); //년도
    var month = date.getMonth() + 1; //월
    var day = date.getDate(); //일

    if ((day + "").length < 2) {
      //일이 한자리수인 경우
      day = "0" + day;
    }

    var getToday = year + "-" + month + "-" + day; // 오늘 날짜 (2017-02-07)
    {
      getToday > poll.vl_end_dt ? setPossible(false) : setPossible(true);
    }
  };

  return (
    <div>
      <div>
        {/* 이미 투표에 참여한 적이 있는지 체크 */}

        <h3>{poll.vl_subject}</h3>
        <div className="poll-date-sum-section">
          <span>
            투표기간: {poll.reg_date}~{poll.vl_end_dt}
          </span>
          <span>참여인수: {poll.vt_count}명</span>
        </div>
        <div className="poll-view-area">
          {/* 투표에 참여할 수 있는 경우 */}
          {possible &&
            !resultCk &&
            item &&
            item.map((item, idx, vl_seq) => (
              <ItemList
                key={item + idx + vl_seq}
                item={item}
                handleItem={handleItem}
              ></ItemList>
            ))}

          {/* 투표 참여 불가-이미 투표참여, 날짜 지남/
         결과 보기 눌렀을 때 */}
          {(!possible || resultCk) && voting}

          {possible && !resultCk && (
            <div className="pollBtn-flex">
              <div className="pollBtn-flex-align">
                <button
                  className="pollBtn"
                  id="pollBtn-view"
                  onClick={(e) => handleSubmit(e)}
                >
                  투표하기
                </button>

                <button
                  className="pollBtn"
                  id="pollBtn-view"
                  onClick={(e) => handleResult(e)}
                >
                  결과보기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoteView;
