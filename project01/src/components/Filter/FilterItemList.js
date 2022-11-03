import React, { useState } from "react";

const FilterItemList = ({ gameDetail, itemFilterHandler }) => {
  // const [toggle, setToggle] = useState(false);
  // const clickedToggle = () => {
  //   setToggle((prev) => !prev);
  // };

  const [isFiltered, setIsFiltered] = useState(false);

  const filterHandler = (e) => {
    setIsFiltered(!isFiltered);
    itemFilterHandler(e.target.id, e.target.checked);
    console.log(e.target.checked);
  };

  // 필터 리스트 불러오기
  const filterItem = Object.entries(gameDetail).map((itemList, idx) => {
    return (
      <>
        <div className="gameFilterItemList" key={"menu" + idx}>
          {itemList[0]}
        </div>

        {itemList[1].map((i, idx) => (
          <label className="filterCheck" key={idx}>
            <input
              type="checkbox"
              onChange={(e) => filterHandler(e)}
              checked={isFiltered}
              id={i.category_seq}
            />
            <span className="gameFilterItem">{i.game_detail}</span>
          </label>
        ))}
      </>
    );
  });

  return <>{filterItem}</>;
};

export default FilterItemList;
