import React from 'react'
import '../../styles/Edit.css'
const LoaEdit = () => {
  return (
    
    <div className="loaEditConfig">
    <div className="loaPosition">
        <button className="EditSelectButton" type="button" value='35'>딜러</button>
        <button className="EditSelectButton" type="button" value='36'>서포터</button>
    </div>
    <div className="loaTier">
        <button className="EditSelectButton" type="button" value='29'>발탄</button>
        <button className="EditSelectButton" type="button" value='30'>비아키스</button>
        <button className="EditSelectButton" type="button" value='31'>쿠크세이튼</button>
        <button className="EditSelectButton" type="button" value='32'>아브렐슈드</button>
        <button className="EditSelectButton" type="button" value='33'>일리아칸</button>
        <button className="EditSelectButton" type="button" value='34'>카양겔</button>
    </div>
    </div>

  )
}

export default LoaEdit