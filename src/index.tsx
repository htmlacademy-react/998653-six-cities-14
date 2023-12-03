import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './project/store/index';
import { fetchOffers, checkAuth } from './project/store/api-actions';
import App from './project/components/app/app';

store.dispatch(fetchOffers);
store.dispatch(checkAuth);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);


