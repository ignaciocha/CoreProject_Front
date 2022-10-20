import React from 'react';
import FilterMenuList from './FilterMenuList';


const FilterBox = () => {
  
  const list = [1, 2, 3, 4];
  

  const filterMenuList = list.map((i, idx) => (
    <FilterMenuList item={i} key={idx}/>
  ))

  const filterBoxStyle = {
    border: '5px #841D9E solid',
    borderRadius: '20px',
    backgroundColor: ''
  }

  return (
    <div style={filterBoxStyle}>
      {filterMenuList}
    </div>
  )
}

export default FilterBox;