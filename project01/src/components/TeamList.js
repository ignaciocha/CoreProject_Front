import React from 'react'
import teamList from '../assets/dummy/teamlist.json'
import Team from '../components/Team'

const container = {
    display : 'flex',
    flexWrap : 'wrap'
}

let list = teamList.list.map((item,idx)=>(<Team key={idx+item.teamName} item={item} idx={idx}></Team>))

export const TeamList = () => {
  return (
    <div>
        <div style={container}>
            {list}
        </div>
    </div>
  )
}

