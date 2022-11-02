import React, { useState } from "react";

const FilterItemList = ({ gameDetail, setFilterTeam }) => {

  // const [toggle, setToggle] = useState(false);
  // const clickedToggle = () => {
  //   setToggle((prev) => !prev);
  // };

  const [filterList, setFilterList] = useState([]);
  

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkeditems, setCheckeditems] = useState();
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
    console.log(filterList);
  }

  // 필터 리스트 불러오기
  const filterItem = Object.entries(gameDetail).map((i, idx) => {
    return (
      <div className="gameFilterItemList" key={`menu${idx}`}>
        <h2 className="gameFilterMenu" >{i[0]}</h2>
        {i[1].map((j) => (
          <label className="filterCheck" key={`filter${j}`}>
            <input type="checkbox" value={j} 
            onClick={addFilterList}/>
            <span className="gameFilterItem">{j}</span>
          </label>
        ))}
      </div>
    );
  });

  const checkedFilterHandler = () => {

  }

  function acceptFilter(e) {
    e.preventDefault();
    setFilterTeam(filterList);
  }

  return (
    <form className="buttonStyle">
      
      {filterItem}
      <button onClick={e => acceptFilter(e)}>적용</button>
      {/* <button onClick={e => setFilter(e)}>초기화</button> */}

    </form>
  );
};

export default FilterItemList;
