import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>Back</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    width: 150px;
    height: 60px;
    border: 3px solid #315cfd;
    border-radius: 45px;
    transition: all 0.3s;
    cursor: pointer;
    background: white;
    font-size: 1.3em;
    font-weight: 550;
    transform:scale(0.6)
  }

  button:hover {
    background: #315cfd;
    color: white;
    font-size: 1.5em;
  }`;

export default Button;
