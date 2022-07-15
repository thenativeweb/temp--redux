import { Accounts } from './pages/Accounts';
import { Content } from './layout/Content';
import React from 'react';
import { Sidebar } from './layout/Sidebar';
import { StartPage } from './pages/StartPage';
import { Transactions } from './pages/Transactions';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Content>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/accounts" element={<Accounts />} />
          </Routes>
        </Content>
      </div>
    </div>
  );
}

export default App;
