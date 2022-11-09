import React from 'react'

const PollResult = ({item}) => {
  return (
    <div>
        <div className="py-3 w-100 mb-4 shadow-lg hover-zoom px-2  rounded bg-white">
            <div className="flex align-items-center">
              <div className="d-inline-block ml-3 mr-3"
              />
              <span className=" font-weight-bold text-primary-dark d-inline-block">
                {item.text}
              </span>
              <span className=" font-weight-bold text-primary-dark d-inline-block">
                {item.vote-1}명
              </span>  
              <span className=" font-weight-bold text-primary-dark d-inline-block">
                {item.sum>0? (((item.vote-1)/item.sum)*100).toFixed(1) : 0 }%
              </span>
            </div>
          </div>

    </div>
  )
}

export default PollResult