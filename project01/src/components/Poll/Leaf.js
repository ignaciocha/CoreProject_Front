import React from 'react'
import { LeafPoll, Result } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'


const resData2 = [
  { id: 0, text: 'React', votes: 9 },
  { id: 1, text: 'Vue', votes: 7 },
  { id: 2, text: 'Angular', votes: 2 }
]

const themeData = {
  textColor: '#19181f',
  mainColor: '#00B87B',
  backgroundColor: 'white',
  alignment: 'center',
  leftColor: '#00B87B',
  rightColor: '#FF2E00'
}

function vote(item,results) {
  console.log('voted', item, results)
}

const Leaf = () => {
  return (
    <div
      style={{
        margin: '300px auto',
        width: '500px'
      }}
    >

      <LeafPoll
        type='multiple'
        question='Pick your favourite framework.'
        results={resData2}
        theme={themeData}
        onVote={vote}
        isVoted={false}
      />
      
      <h2>isVoted w/ id for colouring (only for 'multiple')</h2>
      <LeafPoll
        type='multiple'
        question='Pick your favourite framework.'
        results={resData2}
        theme={themeData}
        onVote={vote}
        isVoted={true}
        isVotedId={1}
      />
    </div>
  )
}

export default Leaf