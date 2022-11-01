import React, { useState } from "react";

const FilterItemList = ({ item }) => {

  // const [toggle, setToggle] = useState(false);
  // const clickedToggle = () => {
  //   setToggle((prev) => !prev);
  // };

  const [filterList, setFilterList] = useState([]);


  // 필터링 리스트에 요소 추가
  const addFilterList = e => {
    if(filterList.includes(e.target.value)) {
      const newFilterList = filterList.filter(i => (
        i !== e.target.value
      ))
      setFilterList(newFilterList)
    }else {
      const newFilterList = filterList.concat(e.target.value)
      setFilterList(newFilterList)
    }
  }

  // 필터 리스트 불러오기
  const filterItem = Object.entries(item).map((i) => {
    return (
      <div className="gameFilterItemList">
        <h2 className="gameFilterMenu">{i[0]}</h2>
        {i[1].map((j) => (
          <label className="filterCheck">
            <input type="checkbox" value={j} onClick={addFilterList} />
            <span className="gameFilterItem">{j}</span>
          </label>
        ))}
      </div>
    );
  });



  return (
    <div className="buttonStyle">
      
      {filterItem}

      {/* <Button type='filter'
      onClick={clickedToggle}
      toggle={toggle}
      children={props.item}>
      </Button> */}
    </div>
  );
};

export default FilterItemList;
