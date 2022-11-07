import React, { useState } from 'react'

const Valorant = ({valSet, setValTier, valTier, valPosition, setValPosition}) => {
  
  let valT = [];
  let valP = [];
  
  for(var i=0; i<valSet.length; i++){
    if(valSet[i].game_section === '포지션'){
      valP.push(valSet[i].game_detail)
    }else if(valSet[i].game_section === '티어'){
      valT.push(valSet[i].game_detail)
    }
  }

  const valSelectD = (e) => {
    if(e.target.checked === true){
      setValTier([...valTier, e.target.value])
      e.target.parentNode.style.backgroundColor = 'rgba(128, 0, 128, 0.051)'
    }else if(e.target.checked === false){
      valTier.splice(valTier.indexOf(e.target.value), 1)
      e.target.parentNode.style.backgroundColor = 'rgb(250, 250, 250)'
      setValTier([...valTier])
    }
  }

  const valSelectP = (e) => {
    if(e.target.checked === true){
      e.target.parentNode.style.backgroundColor = 'rgba(128, 0, 128, 0.051)'
      setValPosition([...valPosition, e.target.value])
    }else if(e.target.checked === false){
      valPosition.splice(valPosition.indexOf(e.target.value), 1)
      e.target.parentNode.style.backgroundColor = 'rgb(250, 250, 250)'
      setValPosition([...valPosition])
    }
  }

  const valTList = valT.map((item, idx)=>
            (<label id='fBtn' key={item+idx}>
              {item}
            <input id='settingCb' type='checkbox' value={item} onClick={valSelectD}/></label>))

  const valPList = valP.map((item, idx)=>
            (<label id='fBtn' key={item+idx}>
              {item}
            <input id='settingCb' type='checkbox' value={item} onClick={valSelectP}/></label>))


  return (
    <div>
      <div className='gameBox'>
        <ul id='fSpanBox'>
          <li>
            <span id='fSpan'>티어</span>
              <div id='fList'>
                {valTList}
              </div>
          </li>
          <li>
            <span id='fSpan'>포지션</span>
            <div id='fList'>
              {valPList}
            </div>
          </li>
        </ul>
      </div>  
    </div>
  )
}

export default Valorant