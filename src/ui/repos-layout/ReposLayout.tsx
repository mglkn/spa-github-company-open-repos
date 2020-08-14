import './style.css';

import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { nextPage } from '../../store/reducers/github';

import ErrorMessage from '../error-message/ErrorMessage';
import ReposList from '../repos-list/ReposList';
import LoadMoreButton from '../load-more-button/LoadMoreButton';

const ReposLayout: React.FC = () => {
  const dispatch = useDispatch();
  const { repos, error, reposCount, isAppendReposFetching } = useSelector(
    (state: RootState) => state.github
  );

  const loadMoreButtonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(nextPage());
  }

  const loadMoreButtonSign = `${repos.length}/${reposCount}`
  const isLoadMoreButtonDisabled = isAppendReposFetching || repos.length >= reposCount;

  if (error !== null) {
    return (
      <ErrorMessage message={error} />
    );
  }

  if (repos.length === 0) {
    return (
      <div>no any repos</div>
    )
  }

  return (
    <div className="repos-layout">

      <div className="repos-layout__list">
        <ReposList repos={repos} />
      </div>

      <div className="repos-layout__load-more-button">
        <LoadMoreButton
          onClick={loadMoreButtonHandler}
          isLoading={isLoadMoreButtonDisabled}
          reposCount={loadMoreButtonSign} />
      </div>

    </div>
  );
}

export default ReposLayout;
