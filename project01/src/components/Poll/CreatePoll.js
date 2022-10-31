import React from 'react'

const CreatePoll = () => {
  return (
    <div>새 투표 생성
        <from name='createPoll' method='post' action=''>
            
            투표 주제 <input type="text" name='vl_subject'></input>


        </from>


    </div>
  )
}

export default CreatePoll