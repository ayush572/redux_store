import React from 'react';
import ReactDOM from 'react-dom/client'; 
// this provider is used to link the react application to the redux store. react-redux is the library that helps us to connect the 
// react application to the redux store
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

