import React from 'react'
import { Link } from 'react-router-dom'


// 헤더에 useNavigate로 버튼 클릭시 
// 로그인한 아이디가 팀원으로 있는 팀이 없을 경우 이 페이지로 이동하게 하면 될 듯?


const NoTeam = () => {
  return (
    <div>
        <h3>참여 중인 팀이 없어요 😥</h3>
        <div>

    <p>아래에서 참여하고 싶은 팀을 찾아보거나 직접 팀을 만들어 보세요</p>
    
    {/* <Link to="./이동할 페이지 경로/파일명">  */}
    <button className='noTeamBtn'>모집 중인 팀을 찾아보려면</button>
    {/* </Link> */}

    <br></br>
    <button className='noTeamBtn'>직접 새로운 팀을 만드려면</button>

        </div>

    </div>

  )
}

export default NoTeam