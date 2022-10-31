import React from 'react';
import FilterMenuList from './FilterMenuList';
import '../../styles/FilterBox.css'



const FilterBox = () => {
  
  const gameDetail = {
    '티어': ['언랭', '아이언', '브론즈', '실버', '골드'],
    '포지션': ['탑', '정글', '미드', '바텀', '서포터'],
    '성별': ['남자', '여자'],
    '나이': ['10대', '20대', '30대', '40대', '50대 이상']
  }
  
  

  const filterMenuList = Object.entries(gameDetail).map((i, idx) => (
    <FilterMenuList item={i} key={idx}/>
  ))

  

  return (
    <div className='filterBoxStyle'>
      {filterMenuList}
      <div className='filterDoneBox'>
      <div className="filterDone">적용</div>
      <div className="filterReset">초기화</div>
      </div>
    </div>
  )
}

export default FilterBox;