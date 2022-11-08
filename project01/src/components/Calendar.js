import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddEventModal from './Modal/AddEventModal';
import '../styles/Calendar.css';
import '../styles/AddEventModal.css';
import axios from 'axios';

const Calendar = ({ eventList, setEventList, team_seq }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const calendarRef = useRef(null);
	const [event, setEvent] = useState({});
	const [modalState, setModalState] = useState('');

	/** 캘린더에 이벤트 추가 */
	const onEventAdded = (e) => {
		const calendarApi = calendarRef.current.getApi();
		calendarApi.addEvent({
			id: localStorage.getItem('user_id'),
			start: e.start,
			end: e.end,
			title: e.title,
		});
	};

	const eventAddHandler = async (e) => {
		await axios
			.post(`/api/teamroom/${team_seq}/calendar`, {
				id: localStorage.getItem('user_id'),
				start: e.event.startStr,
				end: e.event.endStr,
				title: e.event.title,
			})
			.then((response) => {
				console.log('성공 응답');
				console.log('성공 event', response);
			})
			.catch(() => {
				console.log('실패', e.event);
			});
	};

	const onEventUpdate = (e) => {
		const calendarApi = calendarRef.current.getApi();
		calendarApi.updateEvent({
			id: e.id,
			start: e.start,
			end: e.end,
			title: e.title,
		});
	};

	/** 캘린더가 로드되면 데이터 불러오기 */
	const handleDateSet = () => {
		axios
			.get(`/api/teamroom/${team_seq}/calendar`)
			.then((e) => {
				const viewEvent = e.data.map((i) => ({
					id: i.user_id,
					cal_seq: i.cal_seq,
					title: i.cal_schedule,
					start: i.cal_s_dt,
					end: i.cal_e_dt,
				}));
				setEventList(viewEvent);
				console.log('캘린더 로드: ', viewEvent);
			})
			.catch((e) => {
				console.log('캘린더를 불러올 수 없어요', e);
			});
		// ?start=${moment(data.start)}&end=${moment(data.end)}
		// setEventList(response.data);
	};

	const onUpdate = () => {
		axios
			.get(`/api/teamroom/${team_seq}/calendar/${event.cal_seq}`)
			.then((e) => console.log('업뎃 성공: ', e))
			.catch((e) => console.log('업뎃 실패:', e));
	};

	return (
		<>
			<div style={{ position: 'relative', zIndex: 0 }}>
				<FullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					selectable="true"
					height="auto"
					events={eventList}
					ref={calendarRef}
					eventAdd={(e) => eventAddHandler(e)}
					datesSet={(date) => handleDateSet(date)}
					select={(e) => {
						setEvent({
							start: e.start,
							end: e.end,
						});
						console.log(e);
						setModalState('add');
						setModalOpen(true);
					}}
					eventClick={(e) => {
						setEvent({
							id: e.event.id,
							cal_seq: e.event.cal_seq,
							title: e.event.title,
							start: e.event.start,
							end: e.event.end,
						});
						setModalState('update');
						setModalOpen(() => true);
						console.log('클릭', e.id);
					}}
					event={true}
				/>
			</div>
			<AddEventModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				onEventAdded={(e) => onEventAdded(e)}
				event={event}
				modalState={modalState}
				onEventUpdate={onEventUpdate}
			/>
		</>
	);
};

export default Calendar;
