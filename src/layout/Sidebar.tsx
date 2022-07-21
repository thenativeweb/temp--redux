import { Link } from "react-router-dom";
import * as React from 'react';
import './Sidebar.css';

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/accounts">Accounts</Link></li>
      </ul>
    </div>
  )
};

export {
  Sidebar
};
