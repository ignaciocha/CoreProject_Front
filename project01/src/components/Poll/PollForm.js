import { useState } from "react";
import '../../styles/PollForm.css';
import axios from "axios";


const PollForm = (props) => {
  const [desc, setDesc] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [endtime, setEndtime] = useState("");

  const [formCk,setFormCk] = useState(true);

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

    let url = '/api/newpoll'

    axios.post(url,{
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
        props.propFunction(!formCk);
    })
    .catch((error)=>{
        console.log(error);				//오류발생시 실행
        alert('다시 시도해주세요')
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
      {options.length < 6 && (
        <button onClick={addOption} className="pollBtn" type="button">
          옵션 추가
        </button>
      )}
      <p> 투표 마감 설정: </p>

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
        <button type="submit" className="pollBtn" onClick={(e) => props.propFunction(!formCk)}>
          뒤로 가기
        </button>
      </footer>
    </form>
  );
};

export default PollForm;
