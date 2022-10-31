import React from 'react'

const PollList = ({item, idx}) => {
  return (
    <div>PollList
        <span>번호: {idx}+1</span>
        <span>투표 제목: {item.vl_subject} </span>
        <span>시작일~종료일: {item.reg_date}~{item.vl_end_dt}</span>

    </div>
  )
}

export default PollList