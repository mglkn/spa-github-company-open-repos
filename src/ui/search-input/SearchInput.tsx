import './style.css';

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { changeSearchField } from '../../store/reducers/github';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const { orgName } = useSelector(
    (state: RootState) => state.github
  );

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const target = e.target as HTMLInputElement;
    dispatch(changeSearchField(target.value.trim()));
  }

  return (
    <div className="search-input">
      <input
        className="search-input__input"
        type="text"
        placeholder="type organization name here"
        value={orgName}
        onChange={changeHandler} />
    </div>
  );
}

export default SearchInput;
