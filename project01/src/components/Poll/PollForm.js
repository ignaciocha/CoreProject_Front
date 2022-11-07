import { SyntheticEvent, useState } from "react";
import '../../styles/PollForm.css';
import axios from "axios";
import { json } from "react-router-dom";


const PollForm = () => {
  const [desc, setDesc] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [endtime, setEndtime] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const polls = JSON.parse(
    JSON.stringify(window?.localStorage?.getItem("polls"))
  );

  const handleOptions = (index, value) => {
    setOptions([
      ...options.slice(0, index),
      value,
      ...options.slice(index + 1)
    ]);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(options);
    let optionsData = JSON.stringify(options);
    console.log(optionsData);

    axios.post('api/newpoll',{
    	desc: desc,
      endtime: endtime,
      options: optionsData,
      team_seq: 32,
      user_id: 'user_id 055'
    })
    .then((response) => {
        console.log(response.data);		//정상 통신 후 응답된 메시지 출력
        setDesc('');
        setEndtime('');
        setOptions([]);
    })
    .catch((error)=>{
        console.log(error);				//오류발생시 실행
})
  };

  return (
    <form className="poll-form">
      <section className="poll-form-input">
        <label htmlFor="desc">투표 주제</label>
        <textarea
          className="poll-form-desc"
          id="desc"
          placeholder="투표할 주제를 입력해주세요"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={4}
          cols={40}
        ></textarea>
      </section>
      <ul className="poll-form-option-list">
        {options.map((option, index) => (
          <input
            key={index}
            className="poll-form-option"
            type="text"
            value={option}
            onChange={(e) => handleOptions(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
          />
        ))}
      </ul>
      {options.length < 10 && (
        <button onClick={addOption} className="pollBtn" type="button">
          옵션 추가
        </button>
      )}
      <p> 투표 마감 설정: </p>
      {/* <ul className="poll-form-expiry">
        <li className="poll-form-input">
          <label htmlFor="days">Days</label>
          <input
            id="days"
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.valueAsNumber)}
          />
        </li>
        <li className="poll-form-input">
          <label htmlFor="hours">Hours</label>
          <input
            id="hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.valueAsNumber)}
          />
        </li>
        <li className="poll-form-input">
          <label htmlFor="minutes">Minutes</label>
          <input
            id="minutes"
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.valueAsNumber)}
          />
        </li>
      </ul> */}
      <input
            id="pollendtime"
            className="poll-form-option"
            type="date"
            value={endtime}
            onChange={(e) => setEndtime(e.target.value)}
          />

      <footer className="poll-form-footer">
        <button type="submit" className="pollBtn" onClick={(e) => handleSubmit(e)}>
          투표 생성
        </button>
      </footer>
    </form>
  );
};

export default PollForm;
