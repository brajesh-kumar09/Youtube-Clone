import React from 'react';
import '../App.css';
import { LinearProgress } from "@mui/material";
import { setVideos, YouTubeVideo } from "../redux/slice/YoutubeSlice";
import { searchYouTubeVideos } from "../services/youtube";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Scroller from '../components/Scroller';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

export default function Home() {

  const [isHam, setIsHamburger] = React.useState(true);
  const toggleHamburger = () => {
    setIsHamburger(!isHam);
    console.log("Hamburger toggled:", !isHam);
  };

  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
   const videorender = async (searchTerm:string) => {
      const results: YouTubeVideo[] = await searchYouTubeVideos(searchTerm);
      dispatch(setVideos(results));
      setLoading(false);
    }
    useEffect(() => {
      videorender("international news");
    }, []);
  if (loading)
    return (
      <LinearProgress
        color="error"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          zIndex: 1200,
        }}
      />
    );
   
  return (
    <div className="home">
      <div className="navbar"><Navbar toggleSidebar={() => {}} toggleHamburger={toggleHamburger} /></div>
      <div className={`scroller ${isHam?'' : 'fullscroller'}`}><Scroller videorender={videorender}/></div>
      <div className={`sidebar ${isHam?'' : 'small'}`}><Sidebar isHamburger={isHam} /></div>
      <div className={`feed ${isHam?'' : 'fullfeed'}`}><Feed  videorender={videorender}/></div>
    </div>
  );
}