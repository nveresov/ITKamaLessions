import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import serviceWorker from './serviceWorker'
///import state from './redux/state'
import { addPost } from './redux/state'
import { BrowserRouter } from 'react-router-dom';

//addPost('SamuraiJS.COM')

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
