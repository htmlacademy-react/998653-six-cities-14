import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './project/components/app/app';
import {mockedOffers} from './project/mocks/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App props={mockedOffers} />
  </React.StrictMode>
);
