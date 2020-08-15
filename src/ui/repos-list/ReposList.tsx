import './style.css';

import * as React from 'react';

import { IRepo } from '../../store/reducers/github';
import ReposItem from '../repos-item/ReposItem';

type IProps = {
  repos: IRepo[];
}

const ReposList: React.FC<IProps> = ({ repos }: IProps) => {
  return (
    <ul className='repos-list'>
      {repos.map(repo => <ReposItem key={repo.id} item={repo} />)}
    </ul>
  );
}

export default ReposList;
