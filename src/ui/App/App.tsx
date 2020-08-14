import './style.css';

import * as React from 'react';

import SearchInput from '../search-input/SearchInput';
import ReposLayout from '../repos-layout/ReposLayout';

const App: React.FC = () => {
  return (
    <main className="app">

      <section className="app__search-input">
        <SearchInput />
      </section>

      <section className="app__repos">
        <ReposLayout />
      </section>

    </main>
  )
}

export default App;