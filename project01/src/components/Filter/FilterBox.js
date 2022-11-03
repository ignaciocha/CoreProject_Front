import React, { useState } from 'react';
import '../../styles/FilterBox.css'
import axios from 'axios'
import FilterItemList from './FilterItemList';



const FilterBox = ({gameDetail}) => {
  
  const [filteredList, setFilteredList ] = useState(new Set());

  const itemFilterHandler = (id, isFiltered) => {
    if(isFiltered) {
      filteredList.add(id);
      setFilteredList(filteredList);
    } else if(!isFiltered && filteredList.has(id)) {
      filteredList.delete(id);
      setFilteredList(filteredList);
    }
    console.log('필터 아이템', filteredList);
  }
  
 
  return (
    <div className='filterBoxStyle'>
      {console.log('가공한 값: ', gameDetail)}
     <FilterItemList gameDetail={gameDetail}
     itemFilterHandler={itemFilterHandler}/>
    </div>
  )
}

export default FilterBox;