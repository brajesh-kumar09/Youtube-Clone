import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React from 'react';
import VidFrame from "../components/VidFrame";
import VidPlayerFeed from "../components/VidPlayerFeed";
import { useLocation } from "react-router-dom";
import '../App.css';

export default function VideoPlayer() {
  const location = useLocation();
  const details = location.state;
  const [showSidebar, setShowSidebar] = React.useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={`vid-player ${showSidebar ? "with-sidebar" : ""}`}>
      <div className={`sidebar1 ${showSidebar ? "show" : "hide"}`} ><Sidebar isHamburger={true} /></div>
      <div className="navbar1"><Navbar toggleHamburger={()=>{}} toggleSidebar={toggleSidebar} /></div>
      <div className="vidframe"><VidFrame details={details}/></div>
      <div className="vidfeed"><VidPlayerFeed /></div>
    </div>
  );
}