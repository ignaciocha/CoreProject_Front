import React from 'react'
import '../../styles/Edit.css'
const ValEdit = () => {
  return (
    <div className="valConfig">
    <div className="valPosition">
        <button className="EditSelectButton" type="button" value='25'>타격대</button>
        <button className="EditSelectButton" type="button" value='26'>척후대</button>
        <button className="EditSelectButton" type="button" value='27'>감시자</button>
        <button className="EditSelectButton" type="button" value='28'>전략가</button>
    </div>

    <div className="valTier">
        <button className="EditSelectButton" type="button" value='16'>아이언</button>
        <button className="EditSelectButton" type="button" value='17'>브론즈</button>
        <button className="EditSelectButton" type="button" value='18'>실버</button>
        <button className="EditSelectButton" type="button" value='19'>골드</button>
        <button className="EditSelectButton" type="button" value='20'>플래티넘</button>
        <button className="EditSelectButton" type="button" value='21'>다이아몬드</button>
        <button className="EditSelectButton" type="button" value='22'>초월자</button>
        <button className="EditSelectButton" type="button" value='23'>불멸</button>
        <button className="EditSelectButton" type="button" value='24'>래디언트</button>
    </div>

</div>
  )
}

export default ValEdit