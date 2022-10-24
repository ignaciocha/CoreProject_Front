import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import '../styles/Calendar.css'

const Calendar = () => {
  const [schedule, setSchedule] = useState({
    id: 0,
    title: '',
    start: '',
    end: ''
  });

  const [scheduleList, setScheduleList] = useState([]);

  const addSchedule = () => {
    const tempScheduleList = [...scheduleList, schedule]
            setScheduleList(tempScheduleList)
  }

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        selectable='true'
        height='500px'
        events={scheduleList}
        
        select={(arg) => {
          const title = prompt('일정을 입력해주세요');
          if (title) {
            setSchedule({
              id: schedule.id+1,
              title: title,
              start: arg.start,
              end: arg.end
            })
            addSchedule();
          }
        }}></FullCalendar>
    </div>
  )
}

export default Calendar;