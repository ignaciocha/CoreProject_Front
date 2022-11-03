import React, { useState } from "react";
import "../../styles/FilterBox.css";
import axios from "axios";
import FilterItemList from "./FilterItemList";

const FilterBox = ({ gameDetail, filteredList, setFilteredList }) => {
  
  const itemFilterHandler = (id, isFiltered) => {
    if (isFiltered) {
      filteredList.add(id);
      setFilteredList(filteredList);
    } else if (!isFiltered && filteredList.has(id)) {
      filteredList.delete(id);
      setFilteredList(filteredList);
    }
  };

  const onFilter = () => {
    console.log(Object.values(gameDetail));
    Object.values(gameDetail)
  }


  const filterList = Object.entries(gameDetail).map((i, idx) => (
    <>
      <div className="gameFilterItemList" key={'menu'+idx}>
        {i[0]}
      </div>
      {i[1].map((j, idx) => (
        <FilterItemList
          item={j}
          key={idx}
          gameDetail={gameDetail}
          itemFilterHandler={itemFilterHandler}
        />
      ))}
    </>
  ));

  return <div className="filterBoxStyle">
    {filterList}
    <button onClick={onFilter}>적용</button>
    </div>;
};

export default FilterBox;
