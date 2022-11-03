import React, { useState } from "react";
import "../../styles/FilterBox.css";
import axios from "axios";
import FilterItemList from "./FilterItemList";

const FilterBox = ({ gameDetail, filteredList, setFilteredList,  isAllFiltered, allFilteredHandler }) => {
  
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
    console.log('필터리스트: ',filteredList);
    allFilteredHandler();
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
          isAllFiltered={isAllFiltered}
          allFilteredHandler={allFilteredHandler}
          onFilter={onFilter}
          filteredList={filteredList}
        />
      ))}
    </>
  ));

  return <div className="filterBoxStyle">
    {filterList}
    <button onClick={onFilter}>Accept</button>
    </div>;
};

export default FilterBox;
