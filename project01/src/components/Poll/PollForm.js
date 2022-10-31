import { SyntheticEvent, useState } from "react";
import '../../styles/PollForm.css';

const PollForm = () => {
  const [desc, setDesc] = useState("");
  const [options, setOptions] = useState(["", ""]);
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
  };

  return (
    <form className="poll-form">
      <section className="poll-form-input">
        <label htmlFor="desc">Description</label>
        <textarea
          className="poll-form-desc"
          id="desc"
          placeholder="What do you want to ask in this poll?"
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
        <button onClick={addOption} className="btn" type="button">
          Add another option
        </button>
      )}
      <p> Expire the form after: </p>
      <ul className="poll-form-expiry">
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
      </ul>
      <footer className="poll-form-footer">
        <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>
          Submit Poll
        </button>
      </footer>
    </form>
  );
};

export default PollForm;
