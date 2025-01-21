import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>Click me</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    color: #fff;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #212121;
    cursor: pointer;
    border: 1px solid #212121;
    transition: all 0.3s;
    box-shadow:
      6px 6px 12px #0a0a0a,
      -6px -6px 12px #2f2f2f;
  }

  button:active {
    color: #666;
    box-shadow:
      0px 0px 0px #000,
      0px 0px 0px #2f2f2f,
      inset 4px 4px 12px #1a1a1a,
      inset -4px -4px 12px #1f1f1f;
  }`;

export default Button;
