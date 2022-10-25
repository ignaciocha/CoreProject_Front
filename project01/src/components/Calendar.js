import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddEventModal from './Modal/AddEventModal';
import '../styles/Calendar.css';
import '../styles/AddEventModal.css';
import axios from 'axios';
import moment from 'react-moment'

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = useRef(null);

  const onEventAdded = e => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(e);
  }

  const evnetAddHandler = async (data) => {
    await axios.post('/teamroom/데이터 보낼 곳', data.scheduleList)
  }

  const handleDateSet = async (data) => {
    const response = await axios.get('/teamreoom/받아올 데이터')
  }

  const [schedule, setSchedule] = useState({
    id: 0,
    title: '',
    start: '',
    end: ''
  });

  const [scheduleList, setScheduleList] = useState([]);



  return (
    <div>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          selectable='true'
          height='500px'
          events={scheduleList}
          eventAdd={e => evnetAddHandler(e)}
          datesSet={(date) => handleDateSet(date)}
          viewHint='$0 view'
          select={(e) => {
            setSchedule({
              id: Math.random(),
              title: e.title,
              start: e.start,
              end: e.end
            })
            setModalOpen(true)
          }} />
      </div>
      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={
          e => onEventAdded(e)
        }
        schedule={schedule} />
    </div>
  )
}

export default Calendar;