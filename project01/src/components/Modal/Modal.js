import React from 'react'
import '../../styles/Modal.css'

const Modal = (props) => {
  // 열기, 닫기 모달 헤더 텍스트를 부모로부터 받아옴
  const {open, close, header} = props;

  const modalOpen = (
    <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
        </section>
  )

  return (
    // 모달이 열릴 때 openedModal 클래스가 생성된다
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? modalOpen : null}
    </div>  
  )
}

export default Modal