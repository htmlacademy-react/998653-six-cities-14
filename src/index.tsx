import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './project/store/index';
import App from './project/components/app/app';
import {mockedOffers} from './project/mocks/offers';
import { mockedReviews } from './project/mocks/rewiews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={mockedOffers}
        reviews={mockedReviews}
      />
    </Provider>

  </React.StrictMode>
);


