import React from 'react';
import '../../styles/FilterBox.css';
import FilterItemList from './FilterItemList';

const FilterBox = ({
	gameDetail,
	filteredList,
	setFilteredList,
	isReset,
	setIsReset,
	setFilterTeam,
	filterTeam,
}) => {
	const itemFilterHandler = (id, isFiltered) => {
		if (isFiltered) {
			filteredList.add(id);
			setFilteredList(filteredList);
		} else if (!isFiltered && filteredList.has(id)) {
			filteredList.delete(id);
			setFilteredList(filteredList);
		}
		console.log(filteredList);
	};

	// 리셋 동작
	const onReset = () => {
		setIsReset(true);
		filteredList.clear();
		setFilteredList(filteredList);
	};

	const AcceptFilter = () => {
		const newFilter = [...filteredList];
		setFilterTeam(newFilter);
	};

	const filterList = Object.entries(gameDetail).map((i, idx) => (
		<>
			<div className="gameFilterItemList" key={'menu' + idx}>
				{i[0]}
			</div>
			{i[1].map((j, idx) => (
				<FilterItemList
					item={j}
					key={idx}
					gameDetail={gameDetail}
					itemFilterHandler={itemFilterHandler}
					filteredList={filteredList}
					isReset={isReset}
					setIsReset={setIsReset}
				/>
			))}
		</>
	));

	return (
		<div className="filterBoxStyle">
			{filterList}
			<div>
				<button onClick={AcceptFilter}>적용</button>
				<button onClick={onReset}>초기화</button>
			</div>
		</div>
	);
};

export default FilterBox;
