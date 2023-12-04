import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import { createAPI } from '../service/api';
import { redirect } from './redirect';

const api = createAPI();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument : api,
      },
    }).concat(redirect)
});


export { api, store };
