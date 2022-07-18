import { Accounts } from './pages/Accounts';
import { Content } from './layout/Content';
import React from 'react';
import { LeftSidebar } from './layout/LeftSidebar';
import { Transactions } from './pages/Transactions';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <LeftSidebar />
      <Content>
        <Routes>
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;
