import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './project/store/index';
import { fetchOffers, checkAuth } from './project/store/api-actions';
import App from './project/components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffers);
store.dispatch(checkAuth);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);


