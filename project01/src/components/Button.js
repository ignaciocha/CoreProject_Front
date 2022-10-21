import styled, { css } from "styled-components";

const TYPES = {
  square: css`
    --button-radius: 8px;
  `,
  round: css`
    --button-radius: 40px;
    --button-padding: 5px 35px;
    --background-color: ${(props) => (
      props.toggle ? 'none' : '#711887'
    )}
  `
};

function Button({ disabled, type, children, ...props}) {
  const typeStyle = TYPES[type];

  return (
    <StyledButton
      disabled={disabled}
      typeStyle={typeStyle}
      props={props}
    >
      {children}
      {console.log(props.toggle)}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.typeStyle}

  margin: 0;
  border: 5px solid #841D9E;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, black);
  background: var(--button-bg-color, );
  

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #711887);
  }

  `;
  // &:disabled {
  //   cursor: default;
  //   opacity: 0.5;
  //   background: var(--button-bg-color, #9921B8);
  // }
  
export default Button;