import React from 'react'
import '../../styles/Edit.css'
const LolEdit = () => {
    return (
       
        <div className="lolConfig" >
            <div className="lolPosition" >
                <button className="EditSelectButton" type="button" value='11'>탑</button>
                <button className="EditSelectButton" type="button" value='12'>정글</button>
                <button className="EditSelectButton" type="button" value='13'>미드</button>
                <button className="EditSelectButton" type="button" value='14'>바텀</button>
                <button className="EditSelectButton" type="button" value='15'>서포터</button>
            </div>
      
         <div className="lolTier">
         <button className="EditSelectButton" type="button" value='1'>언랭크</button>
         <button className="EditSelectButton" type="button" value='2'>아이언</button>
         <button className="EditSelectButton" type="button" value='3'>브론즈</button>
         <button className="EditSelectButton" type="button" value='4'>실버</button>
         <button className="EditSelectButton" type="button" value='5'>골드</button>
         <button className="EditSelectButton" type="button" value='6'>플래티넘</button>
         <button className="EditSelectButton" type="button" value='7'>다이아몬드</button>
         <button className="EditSelectButton" type="button" value='8'>마스터</button>
         <button className="EditSelectButton" type="button" value='9'>그랜드마스터</button>
         <button className="EditSelectButton" type="button" value='10'>챌린지</button>
     </div>
        </div>
    )
}

export default LolEdit