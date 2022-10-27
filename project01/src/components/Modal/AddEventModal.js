import { DatePicker, Space } from 'antd';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import moment from 'moment'
// import Datetime from 'react-datetime'
// import  "react-datetime/css/react-datetime.css" ;

const AddEventModal = ({isOpen, onClose, onEventAdded, schedule}) => {
  const [title, setTitle] = useState(schedule.title);
  const [start, setStart] = useState(schedule.start);
  const [end, setEnd] = useState(schedule.end);

  const {RangePicker} = DatePicker;

  const onSubmit = (event) => {
    event.preventDefault();
    
    onEventAdded({
      title,
      start,
      end
    })
    setTitle('');
    onClose();
  }

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <label for='scheduleTitle'>일정</label>
        <input id='scheduleTitle' value={title} 
        onChange={
          e => setTitle(e.target.value)
        } />
        <div>
          <label>시작일</label>
          <DatePicker selected ={schedule.start} onChange={date => setStart(date)}></DatePicker>
        </div>

        <div>
          <label>종료일</label>
          <Space direction="vertical">
            <RangePicker 
            defaultValue={[moment(schedule.start, 'YYYY-MM-DD'), moment(schedule.end, 'YYYY-MM-DD')]} 
            onChange={date => setEnd(date)}
            format='YYYY-MM-DD' />
          </Space>
        </div>

        <button>일정 추가</button>
      </form>
    </ReactModal>
  )
}

export default AddEventModal;