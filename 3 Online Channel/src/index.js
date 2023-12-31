import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider,theme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider theme={theme}>
    <App/>
    </ChakraProvider>
  </BrowserRouter>
);
reportWebVitals();
