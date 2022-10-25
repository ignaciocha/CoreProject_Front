import React from "react";

const Bubble = () => {
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
  const changeColor = (index) => {
    if(checkCircle === ''){ // 전에 눌렀던 게 없을 때
      let x = document.getElementById(index);
      x.style.backgroundColor = 'purple';
      checkCircle = x;
    }else if(parseInt(checkCircle.id) === index){
      console.log("눌렀던 거 또 누름")
    }else{ // 전에 눌렀던 음성이 있으면 다시 비활성화
      checkCircle.style.backgroundColor = "grey";
      let x = document.getElementById(index);
      checkCircle = x; // 바꿔치기
      checkCircle.style.backgroundColor = 'purple'; // 정해진 색상으로만 활성화 되게
    }
  }

  return (
    <div>
      <div className="bubbleChart">
        {style.area.map((item, index) => {
          return (
            <p
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
              onClick={()=>{changeColor(index)}}
            ></p>
          );
        })}
      </div>
    </div>
  );
};

export default Bubble;