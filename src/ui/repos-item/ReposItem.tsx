import './style.css';

import * as React from 'react';

import { IRepo } from '../../store/reducers/github';

import { ReactComponent as WatchIcon } from './img/watch-icon.svg';
import { ReactComponent as StarIcon } from './img/star-icon.svg';
import { ReactComponent as ForkIcon } from './img/fork-icon.svg';

const ReposItem: React.FC<{ item: IRepo }> = ({ item }) => {
  return (
    <li className="repos-item">
      <h4 className="repos-item__header">
        <a
          className="repos-item__header-link"
          target="blank"
          rel="noopener noreferrer"
          href={item.url}>{item.name}</a>
      </h4>

      <div className="repos-item__info">

        <div className="repos-item__info-item">
          <WatchIcon />
          <span className="repos-item__info-value">{item.watchers_count}</span>
        </div>

        <div className="repos-item__info-item">
          <StarIcon />
          <span className="repos-item__info-value">{item.stargazers_count}</span>
        </div>

        <div className="repos-item__info-item">
          <ForkIcon />
          <span className="repos-item__info-value">{item.forks_count}</span>
        </div>

      </div>
    </li>
  );
}

export default ReposItem;
