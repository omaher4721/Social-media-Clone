import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'; 
import { mode } from '@chakra-ui/theme-tools'; 
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SocketContextProvider } from './context/SocketContex.jsx';

// Configuration for the initial color mode
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

// Custom theme colors
const colors = {
  gray: {
    light: '#616161',
    dark: '#1e1e1e',
  },
};

// Extend the Chakra theme
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.800', '#101010')(props),
    }),
  },
  colors,
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Correct initialization for React 18

root.render(
  // in React.StrictMode in development it will render all components twice
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} /> 
          <SocketContextProvider>
          <App />
          </SocketContextProvider>
        </ChakraProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
