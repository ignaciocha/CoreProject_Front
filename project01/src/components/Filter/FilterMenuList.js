import React from 'react';
import FilterItemList from './FilterItemList';

const FilterMenuList = (props) => {
    
  const filterItemList = props.item[1].map((i, idx) => (
    <FilterItemList item={i} key={idx}/>
  ));

  return (
    <div className='filterMenuStyle'>
      <div className='menuStyle'>
        {props.item.filter((i, key) => (
          key === 0
        ))}
      </div>
      {filterItemList}
    </div>
  )
}

export default FilterMenuList;