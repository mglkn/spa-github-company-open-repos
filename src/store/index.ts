import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import githubSaga from './sagas/github';

const sagaMiddleware = createSagaMiddleware();

const middleware = getDefaultMiddleware({
  thunk: false
});

const store = configureStore({
  reducer: { ...reducers },
  middleware: [sagaMiddleware, ...middleware] as const,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(githubSaga);

export type RootState = ReturnType<typeof store.getState>
export default store;
