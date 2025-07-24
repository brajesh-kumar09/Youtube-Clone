import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React from 'react';
import HistoryFeed from "../components/HistoryFeed";
import '../App.css';

export default function History() {
  const [showSidebar, setShowSidebar] = React.useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="history-feed">
      <div className="navbar1"><Navbar toggleHamburger={()=>{}} toggleSidebar={toggleSidebar} /></div>
      <div className={`sidebar1 ${showSidebar ? "show" : "hide"}`} ><Sidebar isHamburger={true} /></div>
      <div className="history-content"><HistoryFeed /></div>
    </div>
  );
}