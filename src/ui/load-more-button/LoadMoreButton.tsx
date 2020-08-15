import './style.css';

import * as React from 'react';

type IProps = {
  isLoading: boolean;
  reposCount: string;
  onClick: (e: React.MouseEvent) => void;
}

const LoadMoreButton: React.FC<IProps> = ({ isLoading, reposCount, onClick }: IProps) => {
  return (
    <button
      className='load-more-button'
      onClick={onClick}
      disabled={isLoading}>Load more {reposCount}</button>
  );
}

export default LoadMoreButton;
