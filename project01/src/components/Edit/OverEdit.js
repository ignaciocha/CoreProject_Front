import React from 'react'
import '../../styles/Edit.css'
const OverEdit = () => {
    return (
        <div className="overConfig">
            <div className="overPosition">
                <button className="EditSelectButton" type="button" value='44'>돌격</button>
                <button className="EditSelectButton" type="button" value='45'>공격</button>
                <button className="EditSelectButton" type="button" value='46'>지원</button>
            </div>
            <div className="overTier">
                <button className="EditSelectButton" type="button" value='37'>브론즈</button>
                <button className="EditSelectButton" type="button" value='38'>실버</button>
                <button className="EditSelectButton" type="button" value='39'>골드</button>
                <button className="EditSelectButton" type="button" value='40'>플래티넘</button>
                <button className="EditSelectButton" type="button" value='41'>다이아몬드</button>
                <button className="EditSelectButton" type="button" value='42'>마스터</button>
                <button className="EditSelectButton" type="button" value='43'>그랜드마스터</button>
            </div>
        </div>

    )
}

export default OverEdit