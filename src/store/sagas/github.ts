import { put, debounce, call, takeEvery, select } from 'redux-saga/effects';

import { fetchRepos, fetchOrg } from '../../services/api';

import {
  changeSearchField,
  setRepos,
  setReposCount,
  nextPage,
  appendRepos,
  setError,
} from '../reducers/github';
import { RootState } from '../index';

const INPUT_DEBOUNCE_TIME = 1000;

const githubSelector = (state: RootState) => state.github

function* fetchReposEffect() {
  const { page, orgName } = yield select(githubSelector);
  try {
    const data = yield call(fetchRepos, orgName.trim(), page);
    if (page === 1) {
      yield put(setRepos(data));
    } else {
      yield put(appendRepos(data));
    }
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* fetchOrgEffect(action: ReturnType<typeof changeSearchField>) {
  const orgName = action.payload.trim();
  if (orgName.length === 0) return;

  try {
    const { public_repos } = yield call(fetchOrg, orgName);
    yield put(setReposCount(public_repos));
    yield call(fetchReposEffect);
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* watchGithubSaga() {
  yield debounce(INPUT_DEBOUNCE_TIME, changeSearchField.type, fetchOrgEffect);
  yield takeEvery(nextPage, fetchReposEffect);
}

export default watchGithubSaga;

export {
  fetchOrgEffect,
  fetchReposEffect,
}
