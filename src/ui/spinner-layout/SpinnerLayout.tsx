import './style.css';

import * as React from 'react';

import Loader from 'react-loader-spinner';

const SpinnerLayout: React.FC = () => {
  return (
    <div className="spinner-layout">
      <Loader
        type="Oval"
        color="#8a2be2"
        height={100}
        width={100} />
    </div>
  );
}

export default SpinnerLayout;