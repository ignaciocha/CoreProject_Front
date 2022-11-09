import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddEventModal from './Modal/AddEventModal';
import '../styles/Calendar.css';
import '../styles/AddEventModal.css';
import axios from 'axios';
import dayjs from 'dayjs';

const Calendar = ({ eventList, setEventList, team_seq }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const calendarRef = useRef(null);
	const [event, setEvent] = useState({});
	const [modalState, setModalState] = useState('');

	/** 캘린더에 이벤트 추가 */
	const onEventAdd = (e) => {
		console.log('이벤트 추가 ', e);
		const calendarApi = calendarRef.current.getApi();
		calendarApi.addEvent({
			user_id: localStorage.getItem('user_id'),
			start: e.start,
			end: e.end,
			title: e.title,
		});
	};

	const eventAddHandler = (e) => {
		axios
			.post(`/api/teamroom/${team_seq}/calendar`, {
				user_id: localStorage.getItem('user_id'),
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
		axios
			.patch(`/api/teamroom/${team_seq}/calendar/${event.cal_seq}`, {
				title: e.title,
				start: dayjs(e.start).format('YYYY-MM-DD hh:mm'),
				end: dayjs(e.end).format('YYYY-MM-DD hh:mm'),
			})
			.then((e) => console.log('업뎃 성공: ', e))
			.catch((e) => console.log('업뎃 실패:', e));

		const newUpdate = eventList.filter((i) => i.id !== Number(event.cal_seq));
		setEventList([
			...newUpdate,
			{
				groupId: localStorage.getItem('user_id'),
				id: event.cal_seq,
				title: e.title,
				start: e.start,
				end: e.end,
			},
		]);
	};

	const onEventDelete = (e) => {
		axios
			.delete(`/api/teamroom/${team_seq}/calendar/${event.cal_seq}`)
			.then((e) => console.log('삭제 성공'))
			.catch((e) => console.log('삭제 실패', e));

		const newDelete = eventList.filter((i) => i.id !== Number(event.cal_seq));

		setEventList([...newDelete]);
	};

	/** 캘린더가 로드되면 데이터 불러오기 */
	const handleDateSet = () => {
		axios
			.get(`/api/teamroom/${team_seq}/calendar`)
			.then((e) => {
				const viewEvent = e.data.map((i) => ({
					groupId: i.user_id,
					id: i.cal_seq,
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
					editable={true}
					// eventAdd={(e) => eventAddHandler(e)}
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
						console.log('클릭', e.event);
						setEvent({
							user_id: e.event.groupId,
							cal_seq: e.event.id,
							title: e.event.title,
							start: e.event.start,
							end: e.event.end,
						});
						setModalState('update');
						setModalOpen(() => true);
					}}
				/>
			</div>
			<AddEventModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				onEventAdd={(e) => onEventAdd(e)}
				event={event}
				modalState={modalState}
				onEventUpdate={onEventUpdate}
				onEventDelete={onEventDelete}
			/>
		</>
	);
};

export default Calendar;
