import { Content } from './layout/Content';
import { Sidebar } from './layout/Sidebar';
import { Transactions } from './pages/Transactions';
import { Route, Routes } from 'react-router';
import * as React from 'react';
import './App.css';
import {Accounts} from "./pages/Accounts";

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div>
        <Content>
          <Routes>
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/accounts' element={<Accounts />} />
          </Routes>
        </Content>
      </div>
    </div>
  );
}

export default App;
