import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Datetime from 'react-datetime'
import  "react-datetime/css/react-datetime.css" ;

const AddEventModal = ({isOpen, onClose, onEventAdded, event}) => {
  const [title, setTitle] = useState(event.title);
  const [start, setStart] = useState(event.start);
  const [end, setEnd] = useState(event.end);

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
        <label htmlFor='scheduleTitle'>일정</label>
        <input id='scheduleTitle' value={title} 
        onChange={
          e => setTitle(e.target.value)
        } />
       
        <div>
          날짜
          <Space direction="vertical">
            <RangePicker 
            defaultValue={[moment(event.start, 'YYYY-MM-DD'), moment(event.end, 'YYYY-MM-DD')]} 
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