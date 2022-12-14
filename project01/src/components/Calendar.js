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
		const calendarApi = calendarRef.current.getApi();

		console.log(e);
		axios
			.post(`/api/teamroom/${team_seq}/calendar`, {
				user_id: localStorage.getItem('user_id'),
				start: dayjs(e.start).format('YYYY-MM-DD hh:mm'),
				end: dayjs(e.end).format('YYYY-MM-DD hh:mm'),
				title: e.title,
			})
			.then((response) => {
				console.log('성공 응답', response);
				calendarApi.addEvent({
					id: response.data,
					GroupId: localStorage.getItem('user_id'),
					start: e.start,
					end: e.end,
					title: e.title,
				});
			})
			.catch(() => {
				console.log('실패', e.event);
			});
	};

	/** 캘린더에 이벤트 업데이트 */
	const onEventUpdate = (e) => {
		axios
			.patch(`/api/teamroom/${team_seq}/calendar/${event.cal_seq}`, {
				title: e.title,
				start: dayjs(e.start).format('YYYY-MM-DD hh:mm'),
				end: dayjs(e.end).format('YYYY-MM-DD hh:mm'),
			})
			.then()
			.catch((e) => console.log('업뎃 실패:', e));
		modalState.thisEvent.event.setStart(e.start);
		modalState.thisEvent.event.setEnd(e.end);
		modalState.thisEvent.event.setProp('title', e.title);
	};

	/** 캘린더에 이벤트 삭제 */
	const onEventDelete = () => {
		axios
			.delete(`/api/teamroom/${team_seq}/calendar/${event.cal_seq}`)
			.then()
			.catch((e) => console.log('삭제 실패', e));
		modalState.thisEvent.event.remove();
	};

	/** 캘린더가 로드되면 데이터 불러오기 */
	const handleDateSet = () => {
		axios
			.get(`/api/teamroom/${team_seq}/calendar`)
			.then((e) => {
				console.log('받는 값', e);
				const viewEvent = e.data.map((i) => ({
					groupId: i.user_id,
					id: i.cal_seq,
					title: i.cal_schedule,
					start: i.cal_s_dt,
					end: i.cal_e_dt,
				}));
				setEventList(viewEvent);
			})
			.catch((e) => {
				console.log('캘린더를 불러올 수 없어요', e);
			});
	};

	return (
		<>
			<div style={{ position: 'relative', zIndex: 0 }}>
				<FullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView='dayGridMonth'
					selectable='true'
					height='auto'
					events={eventList}
					ref={calendarRef}
					editable={true}
					// eventAdd={(e) => eventAddHandler(e)}
					datesSet={() => handleDateSet()}
					select={(e) => {
						setEvent({
							start: e.start,
							end: e.end,
						});
						console.log(e);
						setModalState({ state: 'add' });
						setModalOpen(true);
					}}
					eventClick={(e) => {
						setEvent({
							user_id: e.event.groupId,
							cal_seq: e.event.id,
							title: e.event.title,
							start: e.event.start,
							end: e.event.end,
							state: e.event,
						});
						setModalState({ state: 'update', thisEvent: e });
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
