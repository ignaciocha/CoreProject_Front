import React, { useRef } from 'react';
import Bubble from '../components/BubbleChart/Bubble';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Team from '../components/MyTeam/Team';
import '../styles/Main.css';
import '../styles/TeamSearch.css';

const TeamSearch = ({ item, idx }) => {
	const [allTeam, setAllTeam] = useState();
	const [filterTeam, setFilterTeam] = useState([]);
	const [newTeam, setNewTeam] = useState();
	// let {team_seq} = useParams();

	useEffect(() => {
		axios({
			url: '/api/allteam',
			method: 'get',
		})
			.then((res) => {
				setAllTeam(res.data);
				setNewTeam(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const didMount = useRef(false);

	useEffect(() => {
		let nameFilter;
		console.log('팀 리스트: ', allTeam);
		// useEffect 첫 실행 막기
		if (didMount.current && filterTeam.length !== 0) {
			axios
				.get('/api/teamsearch/filter', {
					params: {
						id: filterTeam.join(','),
					},
				})
				.then((e) => {
					console.log('필터링 값:', e.data);
					// 필터에서 선택한 값 중 티어, 던전만
					const tdDetail = e.data
						.map((i) => {
							if (i.game_section === '티어' || i.game_section === '던전')
								return i.game_detail;
							else return null;
						})
						.filter((i) => i !== null);
					console.log('tdDetail', tdDetail);
					// 필터에서 선택한 값 중 포지션만
					const positionDetail = e.data
						.map((i) => {
							if (i.game_section === '포지션') return i.game_detail;
							else return null;
						})
						.filter((i) => i !== null);
					console.log('positionDetail', positionDetail);
					// 필터링 값 중 성별만
					const genderDetail = e.data
						.map((i) => {
							if (i.game_section === '성별') return i.game_detail;
							else return null;
						})
						.filter((i) => i !== null);
					console.log('genderDetail', genderDetail);
					// 필터링 값 중 나이만
					const ageDetail = e.data
						.map((i) => {
							if (i.game_section === '나이') return i.game_detail;
							else return null;
						})
						.filter((i) => i !== null);
					console.log('ageDetail', ageDetail);
					// 이름 필터링
					nameFilter = allTeam.filter(
						(i) => i.team_game === e.data[0].game_name
					);
					console.log('nameFilter', nameFilter);
					try {
						// 티어, 포지션 파싱
						nameFilter.map((i) => (i.team_td = JSON.parse(i.team_td)));
						// 포지션 파싱
						nameFilter.map(
							(i) => (i.team_position = JSON.parse(i.team_position))
						);
						// 나이 파싱
						nameFilter.map((i) => (i.team_age = JSON.parse(i.team_age)));
						// 성별 파싱
						nameFilter.map((i) => (i.team_gender = JSON.parse(i.team_gender)));
					} catch {}
					console.log('이름필터: ', nameFilter);
					// 티어, 던전 필터링
					const tdFilter = nameFilter.filter(
						(x) => tdDetail.filter((y) => !x.team_td.includes(y)).length === 0
					);
					// nameFilter.filter(x => x) 객체들만 가져오고 싶다
					// 각각 비교할 배열 = x.team_td (arr1), e.data.map((z) => z.game_detail) (arr2)
					// arr1 = [마스터, 다이아] arr2 = [브론즈, 마스터]
					// arr1이 arr2의 요소를 전부 가지고 있으면 true 아니면 false
					// (arr2 - arr1).length > 0 이면 필터링 못한 요소가 남아있다는 뜻
					// 즉, 뭐라도 있으면 false

					console.log('티던필터: ', tdFilter);
					// 포지션 필터링
					const positionFilter = tdFilter.filter(
						(x) =>
							positionDetail.filter((y) => !x.team_position.includes(y))
								.length === 0
					);
					console.log('포지션필터: ', positionFilter);
					// 성별 필터
					const genderFilter = positionFilter.filter(
						(x) =>
							genderDetail.filter((y) => !x.team_gender.includes(y)).length ===
							0
					);
					// 나이 필터
					const ageFilter = genderFilter.filter(
						(x) => ageDetail.filter((y) => !x.team_age.includes(y)).length === 0
					);
					setNewTeam(ageFilter);
				})
				.catch(() => {
					alert('데이터를 불러올 수 없습니다');
				});
		} else {
			didMount.current = true;
			setNewTeam(allTeam);
		}
	}, [filterTeam]);

	// const teamView = allTeam.map((item, idx) => <Team item={item} key={idx} />);

	return (
		<div>
			<Bubble setFilterTeam={setFilterTeam} />
			{/* <div className="mainTeamStyle"> */}
			<div className='tsBoxFlex'>
				<div id='teamSearchBox'>
					{allTeam &&
						newTeam.map((item, idx) => <Team item={item} key={idx} />)}
				</div>
			</div>
		</div>
	);
};

export default TeamSearch;
