import React from 'react';
import ReactDOM from 'react-dom';
import './utils/normalize.css';
import './utils/flexible.ts';
import './index.css';
import App from './App';

// 引入StoreContext的Provider
import StoreContext from './context/StoreContext'
import store from './store/index'

ReactDOM.render(<StoreContext.Provider value={store}><App /></StoreContext.Provider>, document.getElementById('root'));
