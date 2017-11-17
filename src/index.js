import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import App from './components/App';

import cartStore from './stores/CartStore';

const stores = {
  cartStore
};

// For easier debugging
window._____APP_STATE_____ = stores;


ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'));
