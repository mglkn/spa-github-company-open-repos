import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import rootReducer from '../reducers/index';
import * as api from '../../services/api';
import { fetchOrgEffect, fetchReposEffect } from './github';
import { setError, setRepos, appendRepos, changeSearchField, setReposCount } from '../reducers/github';

describe('saga github', () => {
  const initialState = {
    github: {
      orgName: '',
      repos: [],
      page: 1,
      reposCount: 0,

      error: null,
      isReposFetching: false,
      isAppendReposFetching: false,
    }
  }

  test('fetchReposEffect should set error if api throw error', async () => {
    const error = new Error('Some error occured');

    return expectSaga(fetchReposEffect)
      .provide([
        [
          matchers.call.fn(api.fetchRepos), throwError(error),
        ],
      ])
      .withReducer(rootReducer, initialState)
      .put(setError(error.message))
      .run();
  });

  test('fetchReposEffect should setRepos if page == 1', async () => {
    const repos = [
      {
        id: '1',
        name: 'repo 1',
        html_url: 'https://blablabla',
        stargazers_count: 1,
        watchers_count: 2,
        forks_count: 333,
      }
    ]

    return expectSaga(fetchReposEffect)
      .provide([
        [
          matchers.call.fn(api.fetchRepos), repos,
        ],
      ])
      .withReducer(rootReducer, initialState)
      .put(setRepos(repos))
      .run();
  });

  test('fetchReposEffect should appendRepos if page > 1', async () => {
    const _initialState = Object.assign({}, initialState);
    _initialState.github.page = 2;

    const repos = [
      {
        id: '1',
        name: 'repo 1',
        html_url: 'https://blablabla',
        stargazers_count: 1,
        watchers_count: 2,
        forks_count: 333,
      }
    ]

    return expectSaga(fetchReposEffect)
      .provide([
        [
          matchers.call.fn(api.fetchRepos), repos,
        ],
      ])
      .withReducer(rootReducer, _initialState)
      .put(appendRepos(repos))
      .run();
  });

  test('fetchOrgEffect should setError if api throw Error', async () => {
    const error = new Error('Some error occured');

    return expectSaga(fetchOrgEffect, changeSearchField('apple'))
      .provide([
        [
          matchers.call.fn(api.fetchOrg), throwError(error),
        ],
      ])
      .put(setError(error.message))
      .run();
  });

  test('fetchReposEffect should setReposCount and call(fetchReposEffect)', async () => {
    const result = { public_repos: 123 };

    return expectSaga(fetchOrgEffect, changeSearchField('apple'))
      .provide([
        [
          matchers.call.fn(api.fetchOrg), result,
        ],
      ])
      .put(setReposCount(result.public_repos))
      .call(fetchReposEffect)
      .run();
  });
});
