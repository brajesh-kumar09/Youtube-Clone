import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import GoogleSignIn from './components/GoogleSignIn';
import GoogleSignUp from './components/GoogleSignUp';
import Sidebar from './components/Sidebar';
import Youtube from './components/Youtube';
import './output.css'; // Assuming you have a CSS file for global styles
import {Home} from './components/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<GoogleSignUp />} />
        <Route path="/sign-in" element={<GoogleSignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
