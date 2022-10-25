import React from 'react'
import { message, Popconfirm } from 'antd';
import 'antd/dist/antd.css';

const TeamMember = ({item, idx}) => {

  const confirm = (e) => {
    console.log(e);
    message.success('탈퇴 처리하였습니다');
  };

  return (
    <div>
    <div>
        <div className='teamMemberStyle'>
            <span>{idx+1}</span>
            <span>{item.user_icon}</span>
            <span>{item.user_nick}</span>
            <span>{item.confirm}</span>
            <span>{item.joindate}</span>
            <span><Popconfirm
    title="정말로 탈퇴시키시겠습니까??"
    onConfirm={confirm}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">탈퇴</a>
  </Popconfirm>
  </span>
        </div>
    </div>
</div>
  )
}

export default TeamMember