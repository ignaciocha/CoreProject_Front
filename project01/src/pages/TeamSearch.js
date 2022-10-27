import React from 'react'
import Bubble from '../components/BubbleChart/Bubble'
import FilterBox from '../components/Filter/FilterBox'

const TeamSearch = () => {
  return (
    <div>
        <h3>팀 찾기</h3>
        <Bubble/>
        <FilterBox/>
        팀 링크
    </div>
  )
}

export default TeamSearch