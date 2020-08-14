import './style.css';

import * as React from 'react';

const ReposLayoutMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="repos-layout-message">
      <span className="repos-layout-message__message">{message}</span>
    </div>
  );
}

export default ReposLayoutMessage;
