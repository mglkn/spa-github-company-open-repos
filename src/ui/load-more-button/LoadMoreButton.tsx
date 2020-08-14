import * as React from 'react';

type IProps = {
  isLoading: boolean;
  reposCount: string;
}

const LoadMoreButton: React.FC<IProps> = ({ isLoading, reposCount }) => {
  return (
    <button disabled={isLoading}>Load more {reposCount}</button>
  );
}

export default LoadMoreButton;
