import React from 'react'
import '../../styles/Edit.css'
const LoaEdit = () => {
  return (
    
    <div className="loaEditConfig">
    <div className="loaPosition">
        <button className="EditSelectButton" type="button">딜러</button>
        <button className="EditSelectButton" type="button">서포터</button>
    </div>
    <div className="loaTier">
        <button className="EditSelectButton" type="button">발탄</button>
        <button className="EditSelectButton" type="button">비아키스</button>
        <button className="EditSelectButton" type="button">쿠크세이튼</button>
        <button className="EditSelectButton" type="button">아브렐슈드</button>
        <button className="EditSelectButton" type="button">일리아칸</button>
    </div>
    </div>

  )
}

export default LoaEdit