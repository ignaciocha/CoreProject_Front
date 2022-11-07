import React, { useState } from 'react'

const Lostark = ({loaSet, setLoaDungeon, loaDungeon, loaPosition, setLoaPosition}) => {

  let loaT = [];
  let loaP = [];
  
  for(var i=0; i<loaSet.length; i++){
    if(loaSet[i].game_section === '포지션'){
      loaP.push(loaSet[i].game_detail)
    }else if(loaSet[i].game_section === '던전'){
      loaT.push(loaSet[i].game_detail)
    }
  }

  const loaSelectD = (e) => {
    if(e.target.checked === true){
      setLoaDungeon([...loaDungeon, e.target.value])
      e.target.parentNode.style.backgroundColor = 'rgba(128, 0, 128, 0.051)'
    }else if(e.target.checked === false){
      loaDungeon.splice(loaDungeon.indexOf(e.target.value), 1)
      e.target.parentNode.style.backgroundColor = 'rgb(250, 250, 250)'
      setLoaDungeon([...loaDungeon])
    }
  }

  const loaSelectP = (e) => {
    if(e.target.checked === true){
      setLoaPosition([...loaPosition, e.target.value])
      e.target.parentNode.style.backgroundColor = 'rgba(128, 0, 128, 0.051)'
    }else if(e.target.checked === false){
      loaPosition.splice(loaPosition.indexOf(e.target.value), 1)
      e.target.parentNode.style.backgroundColor = 'rgb(250, 250, 250)'
      setLoaPosition([...loaPosition])
    }
  }
  
  const loaTList = loaT.map((item, idx)=>
            (<label id='fBtn' key={idx}>
              {item}
            <input id='settingCb' type='checkbox' value={item} onClick={loaSelectD}/></label>))

  const loaPList = loaP.map((item, idx)=>
            (<label id='fBtn' key={idx}>
              {item}
            <input id='settingCb' type='checkbox' value={item} onClick={loaSelectP}/></label>))


  return (
    <div>
      <div className='gameBox'>
        <ul id='fSpanBox'>
          <li>
            <span id='fSpan'>던전</span>
              <div id='fList'>
                {loaTList}
              </div>
          </li>
          <li>
            <span id='fSpan'>포지션</span>
            <div id='fList'>
              {loaPList}
            </div>
          </li>
        </ul>
      </div>  
    </div>
  )
}

export default Lostark