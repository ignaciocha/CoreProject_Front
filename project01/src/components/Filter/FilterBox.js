import React, { useState } from 'react';
import '../../styles/FilterBox.css'
import axios from 'axios'
import FilterItemList from './FilterItemList';



const FilterBox = ({gameDetail}) => {
  
 
  return (
    <div className='filterBoxStyle'>
      <FilterItemList item={gameDetail} />
      {/* {filterMenuList}
      <div className='filterDoneBox'>
      <button className="filterDone">적용</button>
      <button className="filterReset">초기화</button>
      </div> */}
    </div>
  )
}

export default FilterBox;