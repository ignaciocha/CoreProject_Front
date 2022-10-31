import React, { useState } from 'react';
import FilterMenuList from './FilterMenuList';
import '../../styles/FilterBox.css'
import { useEffect } from 'react';
import axios from 'axios'



const FilterBox = () => {
  
  const [gameDetail, setGameDetail] = useState([]);
  const [selectGame, setSelectGame] = useState('');

  const gameClick = () => {
    // 게임 클릭한 이름 선택(소문자)
    setSelectGame('lol')
  }
  
  useEffect(() => {
    axios.get('/api/filter', {
      param: {
        game: selectGame
      }
    })
    .then(e => {console.log(e);})
    .catch(e => {console.log(e);})
  
  }, [selectGame])
  

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