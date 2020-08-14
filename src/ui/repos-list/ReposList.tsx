import './style.css';

import * as React from 'react';

import { IRepo } from '../../store/reducers/github';
import ReposItem from '../repos-item/ReposItem';

const ReposList: React.FC<{ repos: IRepo[] }> = ({ repos }) => {
  return (
    <ul className='repos-list'>
      {repos.map(repo => <ReposItem key={repo.id} item={repo} />)}
    </ul>
  );
}

export default ReposList;
