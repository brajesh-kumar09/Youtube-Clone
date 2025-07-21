import Youtube from "./Youtube";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Scroller from "./Scroller";
import React from 'react';
import VidFrame from "./VidFrame";
import VidPlayerFeed from "./VidPlayerFeed";
import '../App.css';

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
      <div className={`feed ${isHam?'' : 'fullfeed'}`}><Feed /></div>
    </div>
  );
}
const VideoPlayer = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={`vid-player ${showSidebar ? "with-sidebar" : ""}`}>
      <div className={`sidebar1 ${showSidebar ? "show" : "hide"}`} ><Sidebar isHamburger={true} /></div>
      <div className="navbar1"><Youtube toggleHamburger={()=>{}} toggleSidebar={toggleSidebar} /></div>
      <div className="vidframe"><VidFrame/></div>
      <div className="vidfeed"><VidPlayerFeed /></div>
    </div>
  );
}

export { Home, VideoPlayer };