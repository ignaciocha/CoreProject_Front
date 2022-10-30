import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddEventModal from "./Modal/AddEventModal";
import "../styles/Calendar.css";
import "../styles/AddEventModal.css";
import axios from "axios";
import moment from "react-moment";

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = useRef(null);
  const [event, setEvent] = useState({});

  const [eventList, setEventList] = useState([]);


  /** 캘린더에 이벤트 추가 */
  const onEventAdded = (e) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: e.start,
      end: e.end,
      title: e.title
    });
  };

  

  const eventAddHandler = async (e) => {
    await axios.post('/api/teamroom/calendar', {
      start: e.event.startStr,
      end: e.event.endStr,
      title: e.event.title
    })
    .then(response => {
      console.log('성공 응답');
      console.log('성공 event');
    })
    .catch(() => {console.log('실패', e.event)});
  }

  // const handleDateSet = async (data) => {
  //   const response = await axios.get(`/teamroom/GetAddCalendar?start=${moment(data.start)}&end=${moment(data.end)}`);
  //   setEventList(response.data);
  // }

  

  return (
    <>
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar  
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable="true"
          height="auto"
          events={event}
          ref={calendarRef}
          eventAdd={(e) => eventAddHandler(e)}
          // datesSet={(date) => handleDateSet(date)}
          select={(e) => {
            setEvent({
              start: e.startStr,
              end: e.endStr
            });
            setModalOpen(true)
          }}
        />
      </div>
      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={(e) => onEventAdded(e)}
        event={event}
      />
    </>
  );
};

export default Calendar;
