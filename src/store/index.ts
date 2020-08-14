import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducers from './reducers';

const middleware = getDefaultMiddleware({
  thunk: false
});

const store = configureStore({
  reducer: { ...reducers },
  middleware: [...middleware] as const,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export default store;
