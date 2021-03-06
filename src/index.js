import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurrentUserProvider } from './contexts/currentUser';

ReactDOM.render(
  <CurrentUserProvider>
 <React.StrictMode>
    <App />
  </React.StrictMode>
  </CurrentUserProvider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
