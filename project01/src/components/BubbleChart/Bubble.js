import axios from 'axios';
import React, { useState } from 'react';
import FilterBox from '../Filter/FilterBox';

const Bubble = ({ setFilterTeam, filterTeam }) => {
	const style = {
		area: [160, 100, 80, 120],
		gap: [10, 5, 0, 20],
	}; // div들을 담고 있는 객체
	// let checkCircle = ''; // 현재 재생 중인 음성의 index가 무엇인 지 담는다.

	//   for (let i = 0; i < 10; i++) {
	//     style.area.push(Math.ceil(Math.random() * (100 - 40) + 40)); // 동그라미
	//     style.gap.push(Math.ceil(Math.random() * (10 - 5) + 5)); // 간격
	//   }

	// ** 사용자가 누른 div만 정해진 색상으로 활성화 **
	// const changeColor = (index) => {
	//   let x = document.getElementById(index);
	//   if(checkCircle === ''){ // 전에 눌렀던 게 없을 때
	//     x.style.backgroundColor = 'purple';
	//     checkCircle = x;
	//   }else if(parseInt(checkCircle.id) === index){
	//     x.style.backgroundColor = 'lightgray';
	//   }else{ // 전에 눌렀던 음성이 있으면 다시 비활성화
	//     checkCircle.style.backgroundColor = "lightgray";
	//     checkCircle = x; // 바꿔치기
	//     checkCircle.style.backgroundColor = 'purple'; // 정해진 색상으로만 활성화 되게
	//   }
	// }

	const gameTitle = ['리그오브레전드', '오버워치2', '로스트아크', '발로란트'];

	const gameDBTitle = ['리그오브레전드', '오버워치2', '로스트아크', '발로란트'];

	const [gameDetail, setGameDetail] = useState([]);
	const [filteredList, setFilteredList] = useState(new Set());
	const [isReset, setIsReset] = useState(false);

	/** 게임 클릭하면 카테고리에 맞는 필터 보여주기 */
	const gameClick = (e) => {
		const selectGame = e.target.value;
		// 클릭한 게임 이름 선택(소문자)
		axios
			.get('/api/filter', {
				params: {
					game: selectGame,
				},
			})
			.then((e) => {
				let newData = {};

				const formatData = () => {
					let newTier = [];
					let newPosition = [];
					let newDungeon = [];
					let gender = [];
					let age = [];
					console.log('e.data', e.data);
					e.data.map((i) => {
						if (i.game_section === '티어') {
							newTier.push(i);
						} else if (i.game_section === '포지션') {
							newPosition.push(i);
						} else if (i.game_section === '던전') {
							newDungeon.push(i);
						} else if (i.game_section === '성별') {
							gender.push(i);
						} else {
							age.push(i);
						}
						return null;
					});
					console.log('newData', newData);
					if (e.data[0].game_name === '로스트아크') {
						newData = {
							던전: newDungeon,
							포지션: newPosition,
							성별: gender,
							나이: age,
						};
					} else {
						newData = {
							티어: newTier,
							포지션: newPosition,
							성별: gender,
							나이: age,
						};
					}
				};
				formatData();
				setGameDetail(newData);
				setFilteredList(new Set());
			})
			.catch((e) => {
				console.log('필터 에러 :', e);
			});
		setIsReset(true);
		// filterListDecorator(setFilter(e))
	};

	// /** DB데이터 캐싱용 */
	// function filterListDecorator(func) {
	//   let cache = new Map();

	//   return function(x) {
	//     if (cache.has(x)) {
	//       return cache.get(x);
	//     }
	//     let result = func(x);

	//     cache.set(x, result);
	//     return result;

	//   };
	// }

	return (
		<div>
			<div className="bubbleChart">
				{style.area.map((item, index) => {
					return (
						<label key={item}>
							<input
								type="checkbox"
								style={{ display: 'none' }}
								value={gameDBTitle[index]}
								onClick={(e) => gameClick(e)}
							/>
							<p
								className="circle"
								id={index}
								style={{
									width: `${item}px`,
									height: `${item}px`,
									backgroundColor: 'grey',
									borderRadius: '50%',
									marginRight: `${style.gap[index]}px`,
									marginBottom: `-${style.gap[index]}px`,
								}}
							>
								{gameTitle[index]}
							</p>
						</label>
					);
				})}
			</div>
			<FilterBox
				filteredList={filteredList}
				setFilteredList={setFilteredList}
				gameDetail={gameDetail}
				gameClick={gameClick}
				isReset={isReset}
				setIsReset={setIsReset}
				setFilterTeam={setFilterTeam}
			/>
		</div>
	);
};

export default Bubble;
