import axios from 'axios';
import React, { useState, useEffect } from 'react';
import WaitingTeam from '../components/MyTeam/WaitingTeam';
import BelongTeam from '../components/MyTeam/BelongTeam';
import '../styles/MyTeam.css';
import NoTeam from './NoTeam';

const MyTeam = () => {
	const [belongTeam, setBelongTeam] = useState([]);
	const [waitingTeam, setWaitingTeam] = useState([]);

	useEffect(() => {
		axios
			.post('api/myteam', {
				applicant: 'user_id 004',
				confirm_yn: 'y',
			})
			.then((res) => {
				console.log(res.data); //정상 통신 후 응답된 메시지 출력
				setBelongTeam(res.data);
			})
			.catch((error) => {
				console.log(error); //오류발생시 실행
			});
	}, []);

	return (
		<div>
			{belongTeam[0] && (
				<div>
					<h1>내 팀 보기</h1>
					<h3>가입한 팀</h3>
				</div>
			)}

			{belongTeam &&
				belongTeam.map((item, idx) => (
					<BelongTeam
						key={idx + item.team_name}
						item={item}
						idx={idx}
					></BelongTeam>
				))}

			{belongTeam[0] && (
				<div>
					<h3>가입 승인 대기 중인 팀</h3>
				</div>
			)}

			{waitingTeam &&
				waitingTeam.map((item, idx) => (
					<WaitingTeam
						key={idx + item.team_name}
						item={item}
						idx={idx}
					></WaitingTeam>
				))}

			{/* 가입 중인 팀이 없는 경우 */}
			{!belongTeam[0] && !waitingTeam[0] && <NoTeam></NoTeam>}
		</div>
	);
};

export default MyTeam;
