import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => (props.isDarkMode ? '#121212' : '#ffffff')};
    color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};
    transition: all 0.3s ease-in-out;
  }

  h1, h2, h3, p {
    color: ${(props) => (props.isDarkMode ? '#ffffff' : '#000000')};
  }
`;

export default GlobalStyles;
