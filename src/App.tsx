import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Youtube from './components/Youtube';

function App() {
  return (
    <div className="App">
      <Youtube/>
      <Sidebar />
    </div>
  );
}

export default App;
