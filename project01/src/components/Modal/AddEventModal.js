import { DatePicker, Space } from 'antd';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import moment from 'moment'
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { useEffect } from 'react';
// import Datetime from 'react-datetime'
// import  "react-datetime/css/react-datetime.css" ;

const AddEventModal = ({isOpen, onClose, onEventAdded, event}) => {
  const [title, setTitle] = useState(event.title);
  const [start, setStart] = useState(event.start);
  const [end, setEnd] = useState(event.end);

  const {RangePicker} = DatePicker;
  
  useEffect(() => {
    setTitle(event.title)
    setStart(event.start)
    setEnd(event.end)
  
  }, [event])
  
  /** 캘린더 이벤트 전송 */
  const onSubmit = (e) => {
    e.preventDefault();

    onEventAdded({
      title,
      start,
      end
    })
    onClose();
  }

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <form className='calendarForm' onSubmit={onSubmit}>
        <label htmlFor='scheduleTitle'>일정</label>
        <input id='scheduleTitle' 
        defaultValue=''
        placeholder='일정'
        onChange={
          e => setTitle(e.target.value)
        } />
       
        <div>
          <label>날짜</label>
          <Space direction="vertical">
            <RangePicker 
            value={[moment(event.start), moment(event.end)]}
            locale={locale}
            onChange={date => {
              setStart(date[0].format('YYYY-MM-DD'))
              setEnd(date[1].format('YYYY-MM-DD'))
            }} />
          </Space>
        </div>

        <button disabled={!title}>일정 추가</button>
      </form>
    </ReactModal>
  )
}

export default AddEventModal;