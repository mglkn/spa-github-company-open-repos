import './style.css';

import * as React from 'react';

type IProps = {
  message: string;
}

const ReposLayoutMessage: React.FC<IProps> = ({ message }: IProps) => {
  return (
    <div className="repos-layout-message">
      <span className="repos-layout-message__message">{message}</span>
    </div>
  );
}

export default ReposLayoutMessage;
