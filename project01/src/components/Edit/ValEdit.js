import React from 'react'
import '../../styles/Edit.css'
const ValEdit = () => {
  return (
    <div className="valConfig">
    <div className="valPosition">
        <button className="EditSelectButton" type="button">타격대</button>
        <button className="EditSelectButton" type="button">척후대</button>
        <button className="EditSelectButton" type="button">감시자</button>
        <button className="EditSelectButton" type="button">전략가</button>
    </div>

    <div className="valTier">
        <button className="EditSelectButton" type="button">언랭</button>
        <button className="EditSelectButton" type="button">아이언</button>
        <button className="EditSelectButton" type="button">브론즈</button>
        <button className="EditSelectButton" type="button">실버</button>
        <button className="EditSelectButton" type="button">골드</button>
        <button className="EditSelectButton" type="button">플래티넘</button>
    </div>

</div>
  )
}

export default ValEdit