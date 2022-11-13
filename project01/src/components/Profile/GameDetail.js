import React from 'react'

const GameDetail = ({myGame, setMyGame}) => {

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

    if(myLolT.length === 0){

        console.log("배열이 비었슈")
    }

  return (
    <div>
        <div className='gameBox'>
        <div className='gameName'>
            리그오브레전드
        </div>
        {myLolT.length === 0? "설정된 값이 없습니다":
            <div>

        티어 : {myLolT.map((item)=>(<span key={item}>{item}</span>))}
        포지션 : {myLolP.map((item)=>(<span key={item}>{item}</span>))}
            </div>
}
        <div className='gameName'>
            오버워치2
            </div>

            {myOvT.length === 0? "설정된 값이 없습니다":
            <div>

        티어 : {myOvT.map((item)=>(<span key={item}>{item}</span>))}
        포지션 : {myOvP.map((item)=>(<span key={item}>{item}</span>))}
            </div>
}
        <div className='gameName'>
            로스트아크
        </div>
        {myLoaD.length === 0? "설정된 값이 없습니다":
            <div>

        던전 : {myLoaD.map((item)=>(<span key={item}>{item}</span>))}
        포지션 : {myLoaP.map((item)=>(<span key={item}>{item}</span>))}
            </div>
}
        <div className='gameName'>
            발로란트
        </div>
        {myValT.length === 0? "설정된 값이 없습니다":
            <div>

        티어 : {myValT.map((item)=>(<span key={item}>{item}</span>))}
        포지션 : {myValP.map((item)=>(<span key={item}>{item}</span>))}
            </div>
}
        </div>
    </div>
  )
}

export default GameDetail