import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ userId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <StyledWrapper>
      <button className="button" onClick={handleClick}>
        <div className="dots_border" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="sparkle">
          <path
            className="path"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="black"
            fill="black"
            d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
          />
          <path
            className="path"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="black"
            fill="black"
            d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
          />
        </svg>
        <span className="text_button">View Details</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --black-700: hsla(0 0% 12% / 1);
    --border_radius: 9999px;
    --transtion: 0.3s ease-in-out;
    --offset: 2px;

    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transform-origin: center;

    padding: 1rem 2rem;
    background-color: transparent;

    border: none;
    border-radius: var(--border_radius);

    transform: scale(0.8); 
);


    transition: transform var(--transtion);
  }

  .button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    background-color: var(--black-700);

    border-radius: var(--border_radius);
    box-shadow: inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%),
      0px 4px 10px -4px hsla(0 0% 0% / calc(1 - var(--active, 0))),
      0 0 0 calc(var(--active, 0) * 0.375rem) hsl(260 97% 50% / 0.75);

    transition: all var(--transtion);
    z-index: 0;
  }

  .button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    background-color: hsla(260 97% 61% / 0.75);
    background-image: radial-gradient(
        at 51% 89%,
        hsla(266, 45%, 74%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 100% 100%, hsla(266, 36%, 60%, 1) 0px, transparent 50%),
      radial-gradient(at 22% 91%, hsla(266, 36%, 60%, 1) 0px, transparent 50%);
    background-position: top;

    opacity: var(--active, 0);
    border-radius: var(--border_radius);
    transition: opacity var(--transtion);
    z-index: 2;
  }

  .button:is(:hover, :focus-visible) {
    --active: 1;
  }
  .button:active {
    transform: scale(1);
  }

  .button .dots_border {
    --size_border: calc(100% + 2px);

    overflow: hidden;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: var(--size_border);
    height: var(--size_border);
    background-color: transparent;

    border-radius: var(--border_radius);
    z-index: -10;
  }

  .button .dots_border::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left;
    transform: rotate(0deg);

    width: 100%;
    height: 2rem;
    background-color: white;

    mask: linear-gradient(transparent 0%, white 120%);
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .button .sparkle {
    position: relative;
    z-index: 10;

    width: 1.75rem;
  }

  .button .sparkle .path {
    fill: currentColor;
    stroke: currentColor;

    transform-origin: center;

    color: hsl(0, 0%, 100%);
  }

  .button:is(:hover, :focus) .sparkle .path {
    animation: path 1.5s linear 0.5s infinite;
  }

  .button .sparkle .path:nth-child(1) {
    --scale_path_1: 1.2;
  }
  .button .sparkle .path:nth-child(2) {
    --scale_path_2: 1.2;
  }
  .button .sparkle .path:nth-child(3) {
    --scale_path_3: 1.2;
  }

  @keyframes path {
    0%,
    34%,
    71%,
    100% {
      transform: scale(1);
    }
    17% {
      transform: scale(var(--scale_path_1, 1));
    }
    49% {
      transform: scale(var(--scale_path_2, 1));
    }
    83% {
      transform: scale(var(--scale_path_3, 1));
    }
  }

  .button .text_button {
    position: relative;
    z-index: 10;

    background-image: linear-gradient(
      90deg,
      hsla(0 0% 100% / 1) 0%,
      hsla(0 0% 100% / var(--active, 0)) 120%
    );
    background-clip: text;

    font-size: 1rem;
    color: transparent;
  }
`;

export default CustomButton;
