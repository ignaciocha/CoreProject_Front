import React, { useState } from 'react'

const Overwatch2 = ({ovchSet, ovchTier, ovchPosition, setOvchPosition, setOvchTier}) => {

  let ovchT = [];
  let ovchP = [];
  
  for(var i=0; i<ovchSet.length; i++){
    if(ovchSet[i].game_section === '포지션'){
      ovchP.push(ovchSet[i].game_detail)
    }else if(ovchSet[i].game_section === '티어'){
      ovchT.push(ovchSet[i].game_detail)
    }
  }

  const ovchSelectD = (e) => {
    if(e.target.checked === true){
      setOvchTier([...ovchTier, e.target.value])
      e.target.parentNode.style.backgroundColor = 'rgba(128, 0, 128, 0.051)'
    }else if(e.target.checked === false){
      ovchTier.splice(ovchTier.indexOf(e.target.value), 1)
      e.target.parentNode.style.backgroundColor = 'rgb(250, 250, 250)'
      setOvchTier([...ovchTier])
    }
  }

  const ovchSelectP = (e) => {
    if(e.target.checked === true){
      setOvchPosition([...ovchPosition, e.target.value])
      e.target.parentNode.style.backgroundColor = 'rgba(128, 0, 128, 0.051)'
    }else if(e.target.checked === false){
      ovchPosition.splice(ovchPosition.indexOf(e.target.value), 1)
      e.target.parentNode.style.backgroundColor = 'rgb(250, 250, 250)'
      setOvchPosition([...ovchPosition])
    }
  }
  
  const ovchTList = ovchT.map((item, idx)=>
            (<label id='fBtn' key={idx}>
              {item}
            <input id='settingCb' type='checkbox' value={item} onClick={ovchSelectD}/></label>))

  const ovchPList = ovchP.map((item, idx)=>
            (<label id='fBtn' key={idx}>
              {item}
            <input id='settingCb' type='checkbox' value={item} onClick={ovchSelectP}/></label>))


  return (
    <div>
      <div className='gameBox'>
        <ul id='fSpanBox'>
          <li>
            <span id='fSpan'>티어</span>
              <div id='fList'>
                {ovchTList}
              </div>
          </li>
          <li>
            <span id='fSpan'>포지션</span>
            <div id='fList'>
              {ovchPList}
            </div>
          </li>
        </ul>
      </div>  
    </div>
  )
}

export default Overwatch2