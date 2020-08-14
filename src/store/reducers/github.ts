import { createAction, createReducer } from '@reduxjs/toolkit';

export type IRepo = {
  id: string;
  name: string;
  url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}

type IState = {
  orgName: string;
  repos: IRepo[];
  page: number;
  reposCount: number;
}

const initialState: IState = {
  orgName: '',
  repos: [],
  page: 1,
  reposCount: 0,
};

const github = createReducer(initialState, {});

export {
  github,
}