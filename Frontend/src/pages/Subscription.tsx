import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SubscriptionFeed from "../components/SubscriptionFeed";
import '../App.css';

export default function Subscription() {
  const [showSidebar, setShowSidebar] = React.useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="subscription-feed">
      <div className="navbar1"><Navbar toggleHamburger={()=>{}} toggleSidebar={toggleSidebar} /></div>
      <div className={`sidebar1 ${showSidebar ? "show" : "hide"}`} ><Sidebar isHamburger={true} /></div>
      <div className="subscription-content"><SubscriptionFeed /></div>
      </div>
  );
}