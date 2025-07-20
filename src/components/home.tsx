import Youtube from "./Youtube";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Scroller from "./Scroller";
import React from 'react';
import { useState } from "react";
import '../App.css';

const Home = () => {
  const [isHam, setIsHamburger] = React.useState(true);
  const toggleHamburger = () => {
    setIsHamburger(!isHam);
    console.log("Hamburger toggled:", !isHam);
  };
  return (
    <div className="home">
      <div className="navbar"><Youtube toggleHamburger={toggleHamburger} /></div>
      <div className={`scroller ${isHam?'' : 'fullscroller'}`}><Scroller /></div>
      <div className={`sidebar ${isHam?'' : 'small'}`}><Sidebar isHamburger={isHam} /></div>
      <div className={`feed ${isHam?'' : 'fullfeed'}`}><Feed /></div>
    </div>
  );
}

export { Home };