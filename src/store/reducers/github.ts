import { createAction, createReducer } from '@reduxjs/toolkit';

const changeSearchField = createAction<string, 'CHANGE_SEARCH_FIELD'>('CHANGE_SEARCH_FIELD');
const setReposCount = createAction<number, 'SET_REPOS_COUNT'>('SET_REPOS_COUNT');
const setRepos = createAction<IRepo[], 'SET_REPOS'>('SET_REPOS');
const appendRepos = createAction<IRepo[], 'APPEND_REPOS'>('APPEND_REPOS');
const nextPage = createAction('NEXT_PAGE');
const setError = createAction<string, 'SET_ERROR'>('SET_ERROR');

export type IRepo = {
  id: string;
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}

type IState = {
  orgName: string;
  repos: IRepo[];
  page: number;
  reposCount: number;

  error: string | null;
  isReposFetching: boolean;
  isAppendReposFetching: boolean;
}

const initialState: IState = {
  orgName: '',
  repos: [],
  page: 1,
  reposCount: 0,

  error: null,
  isReposFetching: false,
  isAppendReposFetching: false,
};

const githubReducer = createReducer(initialState, {
  [changeSearchField.type]: (state, action) => {
    state.orgName = action.payload;
    state.isReposFetching =
      action.payload.length === 0 ? false : true;
    state.page = 1;
    state.error = null;
  },
  [setRepos.type]: (state, action) => {
    state.repos = action.payload;
    state.isReposFetching = false;
    state.isAppendReposFetching = false;
    state.page = 1;
  },
  [appendRepos.type]: (state, action) => {
    state.repos = state.repos.concat(action.payload);
    state.isAppendReposFetching = false;
  },
  [setReposCount.type]: (state, action) => {
    state.reposCount = action.payload;
  },
  [nextPage.type]: (state, _) => {
    state.isAppendReposFetching = true;
    state.page += 1
  },
  [setError.type]: (state, action) => {
    state.error = action.payload;
  }
});

export {
  githubReducer,
  changeSearchField,
  setRepos,
  appendRepos,
  setReposCount,
  nextPage,
  setError,
}