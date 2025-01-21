import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';
import { ThemeContextProvider, useTheme } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWithTheme = () => {
  const { isDarkMode } = useTheme(); 

  return (
    <>
      <GlobalStyles isDarkMode={isDarkMode} />
      <App />
    </>
  );
};

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserProvider>
        <AppWithTheme />
      </UserProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
