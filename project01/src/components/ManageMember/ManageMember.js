import React from 'react'
import list from '../../assets/dummy/memberlist.json'
import TeamMember from './TeamMember'

const ManageMember = () => {

    let memberlist = list.list.map((item,idx)=>(<TeamMember key={idx+item.teamName} item={item} idx={idx}></TeamMember>))

  return (
    <div>
        <h3>팀원 관리</h3>
        {memberlist}


    </div>
  )
}

export default ManageMember