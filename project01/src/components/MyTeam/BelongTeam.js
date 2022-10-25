import React from 'react'

const BelongTeam = ({item, idx}) => {
  return (
    <div className='waitingTeamStyle'>
        <div>
            <div>
                <span>우엥</span>
            </div>
            <div>
                <span>{item.teamName}</span>
                <span>/가입신청일</span>
            </div>
        </div>
    </div>
  )
}

export default BelongTeam