import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal/Modal';
import Modal2 from '../components/Modal/Modal2';
import '../styles/TeamRoom.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Calendar from '../components/Calendar';
import Chat from '../components/Chat/Chat';
import dayjs from 'dayjs';
import PollMain from '../components/Poll/PollMain';

const TeamRoom = () => {
	const user = localStorage.getItem('user_id');
	let { team_seq } = useParams();
	const navigate = useNavigate();
	const [team_name, setTeam_name] = useState('');

	useEffect(() => {
		let url = '/api/teamaccess/' + team_seq;
		axios
			.post(url, {
				user_id: localStorage.getItem('user_id'),
			})
			.then((res) => {
				console.log(res.data); //정상 통신 후 응답된 메시지 출력
				if (res.data.memCk == 0) {
					alert('잘못된 접근입니다');
					navigate('/');
				}
				setTeam_name(res.data.team_name);
			})
			.catch((error) => {
				console.log(error);
				alert('잘못된 접근입니다');
				navigate('/');
				//오류발생시 실행
			});
	}, []);

	const [modalCal, setModalCal] = useState(false);
	const openModalCal = () => {
		setModalCal(true);
	};
	const closeModalCal = () => {
		setModalCal(false);
	};

	const [modalVote, setModalVote] = useState(false);
	const openModalVote = () => {
		setModalVote(true);
	};
	const closeModalVote = () => {
		setModalVote(false);
	};

	const [eventList, setEventList] = useState([]);
	const today = dayjs(new Date()).format('YYYY-MM-DD');

	return (
		<div>
			<div className='calChatBox'>
				<div className='calendarBox'>
					<Calendar
						eventList={eventList}
						setEventList={setEventList}
						team_seq={team_seq}
					/>
				</div>
				{/* <div className="chatBox">채팅</div> */}
				<Chat team_seq={team_seq} team_name={team_name}></Chat>
			</div>
			<div className='scheduleVoteBox'>
				<h3 className='scheduleHistory' onClick={openModalCal}>
					일정내역
				</h3>
				<Modal open={modalCal} close={closeModalCal} header='일정'>
					<h3>다가오는 일정</h3>
					<div className='scheduleList'>
						{eventList &&
							eventList.map((i) => {
								if (today <= i.end)
									return (
										<div className='calendarModalList'>
											<span className='calendarModalTitle'>{i.title}</span>
											<span className='calendarModalStart'>{i.start}</span>
											<span>~</span>
											<span className='calendarModalEnd'>{i.end}</span>
										</div>
									);
								else return null;
							})}
					</div>
					<h3>지난 일정</h3>
					{eventList &&
						eventList.map((i) => {
							if (today >= i.end)
								return (
									<div className='calendarModalList'>
										<span className='calendarModalTitle'>{i.title}</span>
										<span className='calendarModalStart'>{i.start}</span>
										<span>~</span>
										<span className='calendarModalEnd'>{i.end}</span>
									</div>
								);
							else return null;
						})}
					<div className='scheduleList'></div>
				</Modal>
				<h3 className='voteHistory' onClick={openModalVote}>
					투표내역
				</h3>
				<Modal2 open={modalVote} close={closeModalVote} header='투표'>
					<PollMain team_seq={team_seq} />
				</Modal2>
			</div>
			<div className='teamSetting'>
				<Link to={'/teamsetting/' + team_seq}>
					<Button type='basic'>팀관리</Button>
				</Link>
			</div>
		</div>
	);
};

export default TeamRoom;
