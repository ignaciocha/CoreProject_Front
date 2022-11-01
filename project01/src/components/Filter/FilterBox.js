import React, { useState } from 'react';
import '../../styles/FilterBox.css'
import axios from 'axios'
import FilterItemList from './FilterItemList';



const FilterBox = () => {
  
  const [gameDetail, setGameDetail] = useState([]);

  /** 게임 클릭하면 카테고리에 맞는 필터 보여주기 */
  const gameClick = (e) => {
    // 클릭한 게임 이름 선택(소문자)
    const selectGame = e.target.value;
    axios.get('/api/filter', {
      params: {
        game: selectGame
      }
    })
    .then(e => {
      // 키 이름 변경
        let newItem = {};
        newItem['포지션'] = e.data['position'];

        if(e.data['dungeon'] !== undefined) {
        newItem['던전'] = e.data['dungeon'];
        }else {
          newItem['티어'] = e.data['tier'];
        }
        setGameDetail(newItem);
        console.log(newItem);
    })
    .catch(e => {console.log('필터 에러 :',e);})
  }
  

  return (
    <div className='filterBoxStyle'>
      <FilterItemList item={gameDetail} />
      <button onClick={gameClick} value='lol'>여기!</button>
      {/* {filterMenuList}
      <div className='filterDoneBox'>
      <button className="filterDone">적용</button>
      <button className="filterReset">초기화</button>
      </div> */}
    </div>
  )
}

export default FilterBox;