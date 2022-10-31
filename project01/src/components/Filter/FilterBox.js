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
  
  const applyFilter = async () => {
    await axios.get('/api/filter', {
      params: {
        game: selectGame
      }
    })
    .then(e => {console.log('성공 ',e);})
    .catch(e => {console.log('필터 에러 :',e);})
  }
  
  const filterMenuList = Object.entries(gameDetail).map((i, idx) => (
    <FilterMenuList item={i} key={idx}/>
  ))

  

  return (
    <div className='filterBoxStyle'>
      {filterMenuList}
      <button onClick={gameClick}>여기!</button>
      <div className='filterDoneBox'>
      <button className="filterDone" onClick={applyFilter}>적용</button>
      <button className="filterReset">초기화</button>
      </div>
    </div>
  )
}

export default FilterBox;