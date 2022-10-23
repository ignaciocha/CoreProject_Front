import styled, { css } from "styled-components";

const TYPES = {
  // 일반 버튼
  basic: css`
    --button-radius: 8px;
    --button-hover-bg-color: ${(props) => (
      props.toggle ? '#A1A2A6' : '#D7D9DE'
    )};
  `,
  // 필터링 버튼 전용
  filter: css`
    --button-radius: 40px;
    --button-padding: 5px 35px;
    --button-bg-color: ${(props) => (
      props.toggle ? '#A1A2A6' : 'none'
    )};
    --button-color: ${(props) => (
      props.toggle ? 'white' : 'none'
    )};
    --button-hover-bg-color: ${(props) => (
      props.toggle ? '#A1A2A6' : '#D7D9DE'
    )};
  `
};

function Button({ disabled, type, children, onClick, ...props}) {
  const typeStyle = TYPES[type];

  return (
    // disabled: 버튼 사용/불가 속성
    // typeStyle: 버튼 종류 선택. 버튼 종류는 변수 Types 참조
    // onClick: onClick 이벤트를 받아올 수 있도록 설정
    // toggle: toggle 속성을 받아올 수 있도록 설정
    // children: 버튼 내용은 children으로 전달
    <StyledButton
      disabled={disabled}
      typeStyle={typeStyle}
      onClick={onClick}
      toggle={props.toggle}
    >
      {children}
    </StyledButton>
  );
}
// 버튼 스타일 기본 설정. 웬만하면 고치지 맙시다
const StyledButton = styled.button`
  ${(p) => p.typeStyle}
  ${(p) => p.toggle}
  margin: 0;
  border: 3px solid #A1A2A6;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, black);
  background: var(--button-bg-color, 'none');
  user-select: none;
  

  &:active,
  &:hover {
    background: var(--button-hover-bg-color, #E0BFE6);
  };
  &:focus;
  &:disabled {
       cursor: default;
       opacity: 0.5;
       background: var(--button-bg-color, #9921B8);
     }
    
    `;
    
    export default Button;