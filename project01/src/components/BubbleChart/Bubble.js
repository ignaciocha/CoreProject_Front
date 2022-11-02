import axios from "axios";
import React, { useRef, useState } from "react";
import FilterBox from '../Filter/FilterBox'
import FilterItemList from "../Filter/FilterItemList";

const Bubble = ({setFilterTeam}) => {
  const style = {
    area: [
        50, 100, 80, 120
    ], gap: [
        10, 5, 0, 20
    ]
  }; // div들을 담고 있는 객체
  let checkCircle = ''; // 현재 재생 중인 음성의 index가 무엇인 지 담는다.

//   for (let i = 0; i < 10; i++) {
//     style.area.push(Math.ceil(Math.random() * (100 - 40) + 40)); // 동그라미
//     style.gap.push(Math.ceil(Math.random() * (10 - 5) + 5)); // 간격
//   }

  // ** 사용자가 누른 div만 정해진 색상으로 활성화 **
  // const changeColor = (index) => {
  //   let x = document.getElementById(index);
  //   if(checkCircle === ''){ // 전에 눌렀던 게 없을 때
  //     x.style.backgroundColor = 'purple';
  //     checkCircle = x;
  //   }else if(parseInt(checkCircle.id) === index){
  //     x.style.backgroundColor = 'lightgray';
  //   }else{ // 전에 눌렀던 음성이 있으면 다시 비활성화
  //     checkCircle.style.backgroundColor = "lightgray";
  //     checkCircle = x; // 바꿔치기
  //     checkCircle.style.backgroundColor = 'purple'; // 정해진 색상으로만 활성화 되게
  //   }
  // }

  const gameTitle = [
    '리그오브레전드', '오버워치2', '로스트아크', '발로란트'
  ];

  const gameDBTitle = [
    'lol', 'overwatch2', 'lostark', 'valorant'
  ]

  const [gameDetail, setGameDetail] = useState([]);

  
  /** 게임 클릭하면 카테고리에 맞는 필터 보여주기 */
  const gameClick = async (e) => {
      const selectGame = e.target.value
      // 클릭한 게임 이름 선택(소문자)
      await axios.get('/api/filter', {
        params: {
          game: selectGame
        }
      })
      .then(e => {
        // 키 이름 변경
          let newItem = {};
            newItem['포지션'] = e.data['position'];
    
            if(e.data.dungeon !== undefined) {
            newItem['던전'] = e.data['dungeon'];
            setGameDetail(newItem);
            }else {
              newItem['티어'] = e.data['tier'];
            setGameDetail(newItem);
        }  
      })
      .catch(e => {console.log('필터 에러 :',e);})
    
    // filterListDecorator(setFilter(e))
  }

  // /** DB데이터 캐싱용 */
  // function filterListDecorator(func) {
  //   let cache = new Map();

  //   return function(x) {
  //     if (cache.has(x)) {
  //       return cache.get(x);
  //     }
  //     let result = func(x);

  //     cache.set(x, result);
  //     return result;
      
  //   };
  // }




  return (
    <div>
      <div className="bubbleChart">
        {style.area.map((item, index) => {
          return (
            <label>
              <input type='checkbox' style={{display:'none'}} value={gameDBTitle[index]} onClick={(e) => gameClick(e)}
               />
            <p className="circle"
              key={item}
              id={index}
              style={{
                width: `${item}px`,
                height: `${item}px`,
                backgroundColor: "grey",
                borderRadius: "50%",
                marginRight: `${style.gap[index]}px`,
                marginBottom: `-${style.gap[index]}px`,
              }}
              >{gameTitle[index]}</p></label>
          );
        })}
      </div>
      <FilterItemList gameDetail={gameDetail} setFilterTeam={setFilterTeam}/>
    </div>
  );
};

export default Bubble;