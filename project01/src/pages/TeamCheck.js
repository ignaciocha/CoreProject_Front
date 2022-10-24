import React from 'react'
import '../styles/TeamCheck.css'

const TeamCheck = () => {
  return (
    <div className='plusTeam'>
    <form action='#' method='get'>
      <ul id="title" align='left'>
          <li><h3><b>선택한 팀 이름</b></h3></li>
          <small>팀 상세 조회</small>
      </ul>
      <table width='430px'>
        <tr>
          <td><span><b>모집중</b></span></td>
          <td>0/0</td>
        </tr>
        <tr>
            <td><span><b>참여 중</b></span></td>
            <td>
                방장 닉네임, 팀원 닉네임
            </td>
        </tr>
        <tr>
          <td><span><b>팀 설명</b></span></td>
          <td colSpan='2'><div border='1px solid black'>팀에 대한 설명!</div></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span><b>성별</b></span></td>
          <td>
             <button type='button' className='gender'>남자</button>
             <button type='button' className='gender'>여자</button>
          </td>
        </tr>
        <tr>
          <td><span><b>연령</b></span></td>
          <td>
              <button type='button' className='age'>10대</button>
              <button type='button' className='age'>20대</button>
          </td>
        </tr>
        <tr>
            <td><span><b>플레이 게임</b></span></td>
            <td>리그오브레전드</td>
        </tr>
        <tr>
            <td><span><b>티어</b></span></td>
            <td>
                <button type='button' className='tier'>언랭크</button>
                <button type='button' className='tier'>브론즈</button>
            </td>
        </tr>
        <tr>
            <td><span><b>포지션</b></span></td>
            <td>
                <button type='button' className='position'>탑</button>
                <button type='button' className='position'>정글</button>
            </td>
        </tr>
        <tr align='center'>
            <td colSpan='2'><input type='submit' value='신청하기' id='subBtn'/></td>
            <td></td>
        </tr>
      </table>
    </form>
    </div>
)
}

export default TeamCheck