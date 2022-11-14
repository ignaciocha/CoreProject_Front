import React from 'react';
import ReactModal from 'react-modal';

const JoinCheckModal = ({isOpen, onClose}) => {

  const customStyle = {
    content: {
      position: 'absolute',
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      // marginRight: '-50%',
      width: '40%',
      height: '20%',
      transform: 'translate(-40%, -10%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  };
    return (
      <div>
    <ReactModal isOpen={isOpen} onRequestClose={onClose}
    style={customStyle}>
      <div className='modalDiv'>
        <p>이미 신청 중인 팀입니다!</p>
        <p>가입 승인을 기다려주세요💌</p>
      </div>
    </ReactModal>
        </div>
  )
}

export default JoinCheckModal;