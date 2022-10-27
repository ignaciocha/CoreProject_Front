import React from 'react'
import '../../styles/Edit.css'
const OverEdit = () => {
    return (
        <div className="overConfig">
            <div className="overPosition">
                <button className="EditSelectButton" type="button">탱커</button>
                <button className="EditSelectButton" type="button">딜러</button>
                <button className="EditSelectButton" type="button">서포터</button>
            </div>
            <div className="overTier">
                <button className="EditSelectButton" type="button">언랭</button>
                <button className="EditSelectButton" type="button">브론즈</button>
                <button className="EditSelectButton" type="button">실버</button>
                <button className="EditSelectButton" type="button">골드</button>
                <button className="EditSelectButton" type="button">플래티넘</button>
            </div>
        </div>

    )
}

export default OverEdit