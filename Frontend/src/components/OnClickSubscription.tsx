import Youtube from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Scroller from "./Scroller";
import React from 'react';
import VidFrame from "./VidFrame";
import VidPlayerFeed from "./VidPlayerFeed";
import { useLocation } from "react-router-dom";
import '../App.css';
import SubscriptionFeed from "./SubscriptionFeed";

const Home = () => {

  const [isHam, setIsHamburger] = React.useState(true);
  const toggleHamburger = () => {
    setIsHamburger(!isHam);
    console.log("Hamburger toggled:", !isHam);
  };
  
  return (
    <div className="home">
      <div className="navbar"><Youtube toggleSidebar={() => {}} toggleHamburger={toggleHamburger} /></div>
      <div className={`scroller ${isHam?'' : 'fullscroller'}`}><Scroller /></div>
      <div className={`sidebar ${isHam?'' : 'small'}`}><Sidebar isHamburger={isHam} /></div>
      <div className={`feed ${isHam?'' : 'fullfeed'}`}><SubscriptionFeed /></div>
    </div>
  );
}