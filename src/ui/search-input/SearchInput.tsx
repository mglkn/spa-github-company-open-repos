import './style.css';

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { changeSearchField, fetchReposNow } from '../../store/reducers/github';

const PLACEHOLDER = 'type org and `enter` of wait'

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const { orgName } = useSelector(
    (state: RootState) => state.github
  );

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(fetchReposNow());
    }
  }

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const target = e.target as HTMLInputElement;
    dispatch(changeSearchField(target.value.trimLeft()));
  }

  return (
    <div className='search-input'>
      <input
        className='search-input__input'
        type='text'
        placeholder={ PLACEHOLDER }
        value={orgName}
        onKeyPress={keyPressHandler}
        onChange={changeHandler} />
    </div>
  );
}

export default SearchInput;
