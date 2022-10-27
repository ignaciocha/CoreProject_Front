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
  const [event, setEvent] = useState({
    id: 0,
    title: "",
    start: "",
    end: "",
    teamSeq: "",
  });

  const [eventList, setEventList] = useState([]);


  
  const onEventAdded = (e) => {
    let calendarApi = calendarRef.current.getApi();
    console.log(calendarRef);
    calendarApi.addEvent(e);
  };

  // const eventAddHandler = async (data) => {
  //   await axios.post('/teamroom/addCalendar')
  //   .then(response => response.data.event)
  //   .catch(() => console.log('전송 오류'));
  // }

  // const handleDateSet = async (data) => {
  //   const response = await axios.get(`/teamroom/GetAddCalendar?start=${moment(data.start)}&end=${moment(data.end)}`);
  //   setEventList(response.data);
  // }
  return (
    <div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable="true"
          height="auto"
          events={eventList}
          // eventAdd={(e) => eventAddHandler(e)}
          // datesSet={(date) => handleDateSet(date)}
          select={(e) => {
            setEvent({
              id: Math.random(),
              title: e.title,
              start: e.start,
              end: e.end,
            });
            setModalOpen(true);
          }}
        />
      </div>
      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={(e) => onEventAdded(e)}
        event={event}
      />
    </div>
  );
};

export default Calendar;
