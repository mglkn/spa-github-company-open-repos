import * as React from 'react';

import { IRepo } from '../../store/reducers/github';

const ReposItem: React.FC<{ item: IRepo }> = ({ item }) => {
  return (
    <li>{item.name}</li>
  );
}

export default ReposItem;
