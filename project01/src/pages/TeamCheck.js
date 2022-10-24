import React from 'react'

const TeamCheck = () => {
  return (
    <div>
        <div className='formWrapper'>
        <form action='#' method='get'>
        <table border='1px solid black'>
            <tr>
                <td>(게임 로고?이름?)</td>
                <td>그냥 팀 이름 출력~ 게임 같이하실분</td>
            </tr>
            <tr>
                <td>
                    모집 중
                </td>
                <td>
                    0/0 (현재 참여 중인 인원/정원)
                </td>
            </tr>
            <tr>
                <td>
                    티어 제한
                </td>
                <td>
                    플레티넘
                </td>
            </tr>
            <tr>
                <td>
                    포지션 제한
                </td>
                <td>
                    서포터
                </td>
            </tr>
            <tr>
                <td>
                    팀 설명
                </td>
                <td>
                    어쩌구 저쩌구...
                </td>
            </tr>
            <tr>
                <td colSpan='2' align='center'>
                    <input type='submit' value='가입 신청'></input>
                </td>
            </tr>
        </table>
        </form>
        </div>
    </div>
  )
}

export default TeamCheck