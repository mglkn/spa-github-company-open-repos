import { combineReducers } from '@reduxjs/toolkit';

import { githubReducer } from './github';

export default combineReducers({
  github: githubReducer,
});
