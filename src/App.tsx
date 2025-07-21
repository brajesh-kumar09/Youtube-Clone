import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GoogleSignIn from './components/GoogleSignIn';
import GoogleSignUp from './components/GoogleSignUp';
import {Home, VideoPlayer} from './components/navigator';
import './output.css'; // Assuming you have a CSS file for global styles

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<GoogleSignUp />} />
        <Route path="/sign-in" element={<GoogleSignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/vp" element={<VideoPlayer/>} />
      </Routes>
    </div>
  );
}

export default App;
