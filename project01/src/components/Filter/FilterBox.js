import React, { useState } from "react";
import "../../styles/FilterBox.css";
import axios from "axios";
import FilterItemList from "./FilterItemList";

const FilterBox = ({ gameDetail, filteredList, setFilteredList }) => {
  
const [resetList, setResetList] = useState([]);

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

  
  // const resetList = () => {

  // }

  const onReset = () => {
    const newReset = resetList.map(i => !i)
    setResetList(newReset)
    filteredList.clear();
    setFilteredList(filteredList)
    console.log(resetList);
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
          filteredList={filteredList}
          resetList={resetList}
          setResetList={setResetList}
        />
      ))}
    </>
  ));

  return <div className="filterBoxStyle">
    {filterList}
    <button onClick={onReset}>Accept</button>
    </div>;
};

export default FilterBox;
