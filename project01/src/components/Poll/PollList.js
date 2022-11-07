import React from 'react'

const PollList = ({item, idx}) => {
  return (
    <div>
        <span>{idx+1}</span>
        <span>  {item.vl_subject} </span>
        <span>  {item.reg_date}~{item.vl_end_dt}</span>

    </div>
  )
}

export default PollList