import './style.css';

import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { nextPage } from '../../store/reducers/github';

import ReposLayoutMessage from '../repos-layout-message/ReposLayoutMessage';
import ReposList from '../repos-list/ReposList';
import LoadMoreButton from '../load-more-button/LoadMoreButton';
import SpinnerLayout from '../spinner-layout/SpinnerLayout';

const ReposLayout: React.FC = () => {
  const dispatch = useDispatch();
  const {
    orgName,
    repos,
    error,
    reposCount,
    isAppendReposFetching,
    isReposFetching,
  } = useSelector(
    (state: RootState) => state.github
  );

  const loadMoreButtonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(nextPage());
  }

  const loadMoreButtonSign = `${repos.length}/${reposCount}`
  const isLoadMoreButtonDisabled = isAppendReposFetching || repos.length >= reposCount;

  if (isReposFetching) {
    return <SpinnerLayout />;
  }

  if (error !== null) {
    return <ReposLayoutMessage message={error} />
  }

  if (orgName.length === 0) {
    return <ReposLayoutMessage message={'Type some organization name'} />
  }

  if (repos.length === 0) {
    return <ReposLayoutMessage message={`No any open repositories`} />
  }

  return (
    <div className='repos-layout'>

      <div className='repos-layout__list'>
        <ReposList repos={repos} />
      </div>

      <div className='repos-layout__load-more-button'>
        <LoadMoreButton
          onClick={loadMoreButtonHandler}
          isLoading={isLoadMoreButtonDisabled}
          reposCount={loadMoreButtonSign} />
      </div>

    </div>
  );
}

export default ReposLayout;
