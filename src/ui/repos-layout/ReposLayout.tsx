import './style.css';

import * as React from 'react';

import { IRepo } from '../../store/reducers/github';

import ErrorMessage from '../error-message/ErrorMessage';
import ReposList from '../repos-list/ReposList';
import LoadMoreButton from '../load-more-button/LoadMoreButton';

const testRepos: IRepo[] = [
  {
    id: '1',
    name: "Hello there",
    url: "http://aksdjflkajsdk",
    stargazers_count: 20,
    watchers_count: 30,
    forks_count: 2,
  },
  {
    id: '2',
    name: "Hello there",
    url: "http://aksdjflkajsdk",
    stargazers_count: 20,
    watchers_count: 30,
    forks_count: 2,
  },
  {
    id: '3',
    name: "Hello there",
    url: "http://aksdjflkajsdk",
    stargazers_count: 20,
    watchers_count: 30,
    forks_count: 2,
  },
]

const ReposLayout: React.FC = () => {
  // return (
  //   <ErrorMessage message="Some error occured" />
  // );

  return (
    <div className="repos-layout">

      <div className="repos-layout__list">
        <ReposList repos={testRepos} />
      </div>

      <div className="repos-layout__load-more-button">
        <LoadMoreButton isLoading={false} reposCount={"30/200"} />
      </div>

    </div>
  );
}

export default ReposLayout;
