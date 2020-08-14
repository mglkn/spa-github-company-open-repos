import './style.css';

import * as React from 'react';

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="error-message">
      <span className="error-message__message">{message}</span>
    </div>
  );
}

export default ErrorMessage;
