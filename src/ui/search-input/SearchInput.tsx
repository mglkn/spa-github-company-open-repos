import './style.css';

import * as React from 'react';

const SearchInput: React.FC = () => {
  return (
    <div className="search-input">
      <input
        className="search-input__input"
        type="text"
        placeholder="ORGANIZATION" />
    </div>
  );
}

export default SearchInput;
