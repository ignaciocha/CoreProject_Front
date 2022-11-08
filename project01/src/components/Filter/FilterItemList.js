import React, { useEffect, useState } from 'react';

const FilterItemList = ({
	itemFilterHandler,
	item,
	key,
	setIsReset,
	isReset,
}) => {
	// const [toggle, setToggle] = useState(false);
	// const clickedToggle = () => {
	//   setToggle((prev) => !prev);
	// };

	const [isFiltered, setIsFiltered] = useState(false);

	// 필터링 된 목록
	const filterHandler = (e) => {
		setIsFiltered(!isFiltered);
		itemFilterHandler(e.target.id, e.target.checked);
	};

	//리셋 버튼 동작
	useEffect(() => {
		setIsFiltered(false);
		setIsReset(false);
	}, [isReset]);

	// // 필터 리스트 불러오기

	return (
		<label className="filterCheck" key={key}>
			<input
				type="checkbox"
				onChange={(e) => filterHandler(e)}
				checked={isFiltered}
				id={item.category_seq}
			/>
			<div className={'gameFilterItem' + (isFiltered ? ' active' : '')}>
				{item.game_detail}
			</div>
		</label>
	);
};

export default FilterItemList;
