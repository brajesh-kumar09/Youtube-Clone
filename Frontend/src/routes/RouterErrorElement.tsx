import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Scroller from '../components/Scroller'
import '../App.css'

const RouterErrorElement = () => {
  const [isHam, setIsHamburger] = React.useState(true);
  const toggleHamburger = () => {
    setIsHamburger(!isHam);
    console.log("Hamburger toggled:", !isHam);
  };
  return (<div className='error-container'>
    <div className="navbar"><Navbar toggleSidebar={() => { }} toggleHamburger={toggleHamburger} /></div>
    <div className={`sidebar ${isHam ? '' : 'small'}`}><Sidebar isHamburger={isHam} /></div>
    <div className='error'>Something went wrong!</div>
  </div>)
}

export default RouterErrorElement