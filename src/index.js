import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const store = createStore(app)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
