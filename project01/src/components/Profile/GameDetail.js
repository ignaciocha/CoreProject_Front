import React from 'react'

const GameDetail = ({myGame}) => {

    let myLolT = [];
    let myLolP = [];
    let myOvT = [];
    let myOvP = [];
    let myValT = [];
    let myValP = [];
    let myLoaD = [];
    let myLoaP = [];

    for(var i=0; i<myGame.length; i++){
        if(myGame[i].game_name === '리그오브레전드'){
             if(myGame[i].game_section === '티어'){
                myLolT.push(myGame[i].game_detail)
             }else{
                myLolP.push(myGame[i].game_detail)
             }
        }else if(myGame[i].game_name === '오버워치2'){
            if(myGame[i].game_section === '티어'){
                myOvT.push(myGame[i].game_detail)
             }else{
                myOvP.push(myGame[i].game_detail)
             }
        }else if(myGame[i].game_name === '발로란트'){
            if(myGame[i].game_section === '티어'){
                myValT.push(myGame[i].game_detail)
             }else{
                myValP.push(myGame[i].game_detail)
             }
        }else {
            if(myGame[i].game_section === '포지션'){
                myLoaP.push(myGame[i].game_detail)
             }else{
                myLoaD.push(myGame[i].game_detail)
             }
        }
    }

  return (
    <div>
        <div className='gameBox2'>
        <div className='gameName'>
            리그오브레전드
        </div>
        {myLolT.length === 0? <span className='noGame'>설정된 정보가 없습니다</span>:
        <div className='gameDetailBox'>
        <ul className='gDetailLBox'>
          <li>
            <span className='gameDetailLeft'>티어</span>
              <div className='gameDetailRight'>
                 {myLolT.map((item)=>(<span className='gameDetailSpan' key={item}>{item}</span>))}
              </div>
          </li>
          <li>
            <span className='gameDetailLeft'>포지션</span>
            <div className='gameDetailRight'>
              {myLolP.map((item)=>(<span className='gameDetailSpan' key={item}>{item}</span>))}
            </div>
          </li>
        </ul>
      </div> 
}
        <div className='gameName'>
            오버워치2
            </div>

            {myOvT.length === 0? <span className='noGame'>설정된 정보가 없습니다</span>:
      <div className='gameDetailBox'>
        <ul className='gDetailLBox'>
          <li>
            <span className='gameDetailLeft'>티어</span>
              <div className='gameDetailRight'>
                 {myOvT.map((item)=>(<span className='gameDetailSpan' key={item}>{item}</span>))}
              </div>
          </li>
          <li>
            <span className='gameDetailLeft'>포지션</span>
            <div className='gameDetailRight'>
              {myOvP.map((item)=>(<span className='gameDetailSpan' key={item}>{item}</span>))}
            </div>
          </li>
        </ul>
      </div> 

}
        <div className='gameName'>
            로스트아크
        </div>
        {myLoaD.length === 0? <span className='noGame'>설정된 정보가 없습니다</span>:
        <div className='gameDetailBox'>
        <ul className='gDetailLBox'>
          <li>
            <span className='gameDetailLeft'>던전</span>
              <div className='gameDetailRight'>
                 {myLoaD.map((item)=>(<span className='gameDetailSpan' key={item}>{item}</span>))}
              </div>
          </li>
          <li>
            <span className='gameDetailLeft'>포지션</span>
            <div className='gameDetailRight'>
              {myLoaP.map((item)=>(<span className='gameDetailSpan' key={item}>{item}</span>))}
            </div>
          </li>
        </ul>
      </div> 
}
        <div className='gameName'>
            발로란트
        </div>
        {myValT.length === 0? <span className='noGame'>설정된 정보가 없습니다</span>:
        <div className='gameDetailBox'>
        <ul className='gDetailLBox'>
          <li>
            <span className='gameDetailLeft'>던전</span>
              <div className='gameDetailRight'>
                 {myValT.map((item)=>(<span className='gameDetailSpan' key={item}>{item}</span>))}
              </div>
          </li>
          <li>
            <span className='gameDetailLeft'>포지션</span>
            <div className='gameDetailRight'>
              {myValP.map((item)=>(<span className='gameDetailSpan' key={item}>{item}</span>))}
            </div>
          </li>
        </ul>
      </div> 
}
        </div>
    </div>
  )
}

export default GameDetail