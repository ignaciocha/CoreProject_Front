import React from 'react';
import ReactModal from 'react-modal';

const JoinCheckModal = ({isOpen, onClose}) => {
    return (
      <div>
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
        이미 신청 중인 팀입니다!
        <br/>
        가입 승인을 기다려주세요💌
    </ReactModal>
        </div>
  )
}

export default JoinCheckModal;