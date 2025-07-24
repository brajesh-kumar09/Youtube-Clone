import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MyVideos from "../components/MyVideos";
import '../App.css';

export default function YourVideos() {
  const [showSidebar, setShowSidebar] = React.useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="your-videos">
      <div className="navbar1"><Navbar toggleHamburger={()=>{}} toggleSidebar={toggleSidebar} /></div>
      <div className={`sidebar1 ${showSidebar ? "show" : "hide"}`} ><Sidebar isHamburger={true} /></div>
      <div className="your-videos-content"><MyVideos /></div>
    </div>
  );
}