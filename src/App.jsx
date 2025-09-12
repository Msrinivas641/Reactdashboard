import React from 'react'
import Sidebar from './components/Sidebar';

import './App.css'
import Search from './components/Search';

const App = () => {
  return (
    <div className='dashboard'>
      <div className="dashboard--content">
          <div>
          Home &gt; <strong>Dashboard V1</strong>
          <div className="Search">
            <Search/>
            </div>
        </div>
      </div>
        <Sidebar/>
    </div>
  );
};

export default App;