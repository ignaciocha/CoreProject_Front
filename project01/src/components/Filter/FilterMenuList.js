import React from 'react';
import FilterItemList from './FilterItemList';

const FilterMenuList = (props) => {
  const filterMenuStyle = {
    display: 'flex',
    alignItems: 'center'
  }
  const game = [1, 2, 3, 4]

  const filterItemList = game.map((i, idx) => (
    <FilterItemList item={i} key={idx}/>
  ));

  const menuStyle = {
    margin: '20px 50px 20px 50px',

  }

  return (
    <div style={filterMenuStyle}>
      <button style={menuStyle}>메뉴</button>
      {filterItemList}
    </div>
  )
}

export default FilterMenuList;