import React from 'react'
import '../../styles/Edit.css'
const LolEdit = () => {
    return (
       
        <div className="lolConfig" >
            <div className="lolPosition" >
                <button className="EditSelectButton" type="button" >탑</button>
                <button className="EditSelectButton" type="button" >미드</button>
                <button className="EditSelectButton" type="button" >정글</button>
                <button className="EditSelectButton" type="button" >원딜</button>
                <button className="EditSelectButton" type="button" >서포터</button>
            </div>
      
         <div className="lolTier">
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

export default LolEdit