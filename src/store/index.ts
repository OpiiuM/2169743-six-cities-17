import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import request from '@/shared/request';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: request,
      },
    }).concat(),
});
