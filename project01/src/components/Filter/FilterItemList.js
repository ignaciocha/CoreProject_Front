import React, { useEffect, useState } from "react";

const FilterItemList = ({ itemFilterHandler, item, key, setResetList, resetList }) => {
  // const [toggle, setToggle] = useState(false);
  // const clickedToggle = () => {
  //   setToggle((prev) => !prev);
  // };

  const [isFiltered, setIsFiltered] = useState(false);

  const filterHandler = (e) => {
    setIsFiltered(!isFiltered);
    itemFilterHandler(e.target.id, e.target.checked);
    console.log(resetList);
    const newResetList = resetList.concat(
      !isFiltered
    )
    setResetList(newResetList)
  };
  // // 필터 리스트 불러오기
  
  return (
    <label className="filterCheck" key={key}>
      <input
        type="checkbox"
        onChange={(e) => filterHandler(e)}
        checked={isFiltered}
        id={item.category_seq}
      />
      <span className="gameFilterItem">{item.game_detail}</span>
    </label>
  );
};

export default FilterItemList;
