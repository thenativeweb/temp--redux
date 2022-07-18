import { Link } from 'react-router-dom';
import * as React from 'react';

const Navigation: React.FunctionComponent = () => {
  return (
    <ul>
      <li><Link to='/transactions'>Transactions</Link></li>
      <li><Link to='/accounts'>Accounts</Link></li>
    </ul>
  )
};

export {
  Navigation
};
