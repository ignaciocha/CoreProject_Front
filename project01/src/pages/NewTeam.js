import React, { useEffect, useRef, useState } from 'react'
import Lol from '../components/Game/Lol'
import Valorant from '../components/Game/Valorant'
import Overwatch2 from '../components/Game/Overwatch2'
import Lostark from '../components/Game/Lostark'
import '../styles/NewTeam.css'
import axios from 'axios'

const NewTeam = () => {

  const [lostark, setLostark] = useState(false)
  const [overwatch2, setOverwatch2] = useState(false)
  const [lol, setLol] = useState(false)
  const [valorant, setValorant] = useState(false)
  const [selGame, setSelGame] = useState('')
  const [tGender, setTGender] = useState('')

  const tNameRef = useRef();
  const tMaxRef = useRef();
  const tContentRef = useRef();

  const lolBtnCk = () => {
    setLol(!lol) 
    setLostark(false)
    setOverwatch2(false)
    setValorant(false)
    setSelGame('리그오브레전드')
    setLolTier([])
    setLolPosition([])
    setWhichP([])
    setWhichTd([])
  }
  
  const ovchBtnCk = () => {
    setOverwatch2(!overwatch2)
    setLostark(false)
    setLol(false)
    setValorant(false)
    setSelGame('오버워치2')
    setOvchTier([])
    setOvchPosition([])
    setWhichP([])
    setWhichTd([])
  }
  
  const loaBtnCk = () => {
    setLostark(!lostark)
    setOverwatch2(false)
    setLol(false)
    setValorant(false)
    setSelGame('로스트아크')
    setLoaDungeon([])
    setLoaPosition([])
    setWhichP([])
    setWhichTd([])
  }

  const vrBtnCk = () => {
    setValorant(!valorant)
    setOverwatch2(false)
    setLol(false)
    setLostark(false)
    setSelGame('발로란트')
    setValTier([])
    setValPosition([])
    setWhichP([])
    setWhichTd([])
  }

  const [lolSet, setLolSet] = useState([])
  const [loaSet, setLoaSet] = useState([])
  const [ovchSet, setOvchSet] = useState([])
  const [valSet, setValSet] = useState([])

  const [loaDungeon, setLoaDungeon] = useState([]);
  const [loaPosition, setLoaPosition] = useState([]);
  const [lolTier, setLolTier] = useState([]);
  const [lolPosition, setLolPosition] = useState([]);
  const [valTier, setValTier] = useState([]);
  const [valPosition, setValPosition] = useState([]);
  const [ovchTier, setOvchTier] = useState([]);
  const [ovchPosition, setOvchPosition] = useState([]);

  const [whichTd, setWhichTd] = useState([]);
  const [whichP, setWhichP] = useState([]);

  useEffect(()=>{
    const config = {"Content-Type": 'application/json'};

    axios.get('/api/gamesetting', {}, config)
        .then((res)=>{
          let lolSetting = [];
          let loaSetting = [];
          let ovchSetting = [];
          let valSetting = [];        
            for(var i=0;i<res.data.length;i++){
              if(res.data[i].game_name === '로스트아크'){
                loaSetting.push(res.data[i])
              }else if(res.data[i].game_name === '리그오브레전드'){
                lolSetting.push(res.data[i])
              }else if(res.data[i].game_name === '발로란트'){
                valSetting.push(res.data[i])
              }else{
                ovchSetting.push(res.data[i])
              }
            }
            setLolSet(lolSetting)
            setLoaSet(loaSetting)
            setOvchSet(ovchSetting)
            setValSet(valSetting)
          }).catch((error)=>console.log(error))
  },[])

  useEffect(()=>{
    setWhichP(lolPosition)
    setWhichTd(lolTier)
  },[lolTier, lolPosition])

  useEffect(()=>{
    setWhichP(ovchPosition)
    setWhichTd(ovchTier)
  },[ovchTier, ovchPosition])

  useEffect(()=>{
    setWhichP(valPosition)
    setWhichTd(valTier)
  },[valTier, valPosition])

  useEffect(()=>{
    setWhichP(loaPosition)
    setWhichTd(loaDungeon)
  },[loaDungeon, loaPosition])

  const genderCk = (e) => {
    setTGender(e.target.value)
  }

  const [ageArr, setAgeArr] = useState([])
  
  const addAgeArr = (e) => {
    if(e.target.checked === true){
      setAgeArr([...ageArr, 
        e.target.value
      ])
    }
  }

  const delAgeArr = (e) => {
    if(e.target.checked === false){
      ageArr.splice(ageArr.indexOf(e.target.value), 1)
      setAgeArr([...ageArr])
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const config = {"Content-Type": 'application/json'};

    axios.post('/api/team', {
      teamName: tNameRef.current.value,
      teamMax: tMaxRef.current.value,
      teamContent: tContentRef.current.value,
      teamGame: selGame,
      teamGender: tGender,
      teamAge: JSON.stringify(ageArr),
      teamTD: JSON.stringify(whichTd),
      teamPosition: JSON.stringify(whichP)
    }, config).then((res)=>{console.log(res.config.data)

    }).catch((error)=>console.log(error));


  }

  return (
      <div className='plusTeam'>
          <form onSubmit={handleSubmit} post='get'>
            <ul id="title" align='left'>
                <li><h3><b>팀만들기</b></h3></li>
                <small>팀을 생성해주세요!</small>
            </ul>
            <table>
              <tr>
                <td><span id="newTeamSpan"><b>팀 이름</b></span></td>
                <td><input type="text" name='teamName' size='39'
                    ref={tNameRef}/></td>
              </tr>
              <tr>
                <td><span id="newTeamSpan"><b>모집 인원</b></span></td>
                <td><input type='number'
                name='teamMax' min='5' max='20'
                placeholder='5~20 사이의 값만 입력해주세요'
                  ref={tMaxRef}
                 /></td>
              </tr>
              <tr>
                <td><span id="newTeamSpan"><b>팀 설명</b></span></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <textarea cols='55' rows='3' name='teamContent'
                  ref={tContentRef}/></td>
                <td></td>
              </tr>
              <tr>
                <td><span id="newTeamSpan"><b>성별</b></span></td>
                <td>
                  여 <input type='radio' name='gender' value='여자' onChange={genderCk}/> {"\u00A0"}
                  남 <input type='radio' name='gender' value='남자' onChange={genderCk}/> {"\u00A0"}
                  제한 없음 <input type='radio' name='gender' value='제한없음' onChange={genderCk}/>
                </td>
              </tr>
              <tr>
                <td><span id="newTeamSpan"><b>연령</b></span></td>
                <td>10대 <input type='checkbox' name='age' value='10' onChange={addAgeArr} onClick={delAgeArr}/>
                    20대 <input type='checkbox' name='age' value='20' onChange={addAgeArr} onClick={delAgeArr}/>
                    30대 <input type='checkbox' name='age' value='30' onChange={addAgeArr} onClick={delAgeArr}/>
                    40대 <input type='checkbox' name='age' value='40' onChange={addAgeArr} onClick={delAgeArr}/>
                    50대 이상 <input type='checkbox' name='age' value='50' onChange={addAgeArr} onClick={delAgeArr}/>
                    </td>
              </tr>
            </table>
              <ul id="playGame">
                <li></li>
                <li><b>플레이 게임</b></li>
                <li>
                  <button type="button" className='gameSelect' name='game' value="리그오브레전드" onClick={lolBtnCk}>리그오브레전드</button>
                  <button type="button" className='gameSelect' name='game' value="오버워치2" onClick={ovchBtnCk}>오버워치2</button>
                  <button type="button" className='gameSelect' name='game' value="발로란트" onClick={vrBtnCk}>발로란트</button>
                  <button type="button" className='gameSelect' name='game' value="로스트아크" onClick={loaBtnCk}>로스트아크</button>
                </li>
                  { lol && <Lol
                      lolSet={lolSet}
                      lolTier={lolTier}
                      setLolTier={setLolTier}
                      lolPosition={lolPosition}
                      setLolPosition={setLolPosition}
                      />}
                  { lostark && <Lostark
                      loaSet={loaSet}
                      loaDungeon={loaDungeon}
                      setLoaDungeon={setLoaDungeon}
                      loaPosition={loaPosition}
                      setLoaPosition={setLoaPosition}
                      />}
                  { overwatch2 && <Overwatch2
                      ovchSet={ovchSet}
                      ovchTier={ovchTier}
                      setOvchTier={setOvchTier}
                      ovchPosition={ovchPosition}
                      setOvchPosition={setOvchPosition}
                  />}
                  { valorant && <Valorant
                      valSet={valSet}
                      valTier={valTier}
                      setValTier={setValTier}
                      valPosition={valPosition}
                      setValPosition={setValPosition}
                  />}
                <li><input type='submit' value='팀 만들기' id='newBtn'/></li>
              </ul>
        </form>
      </div>
    )
  }

export default NewTeam