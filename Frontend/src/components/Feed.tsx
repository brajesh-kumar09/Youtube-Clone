import React, { useEffect } from 'react';
import VideoCard from './VideoCard';
import {  searchYouTubeVideos } from '../services/youtube';
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../redux/slice/YoutubeSlice"
import { RootState } from "../redux/store";
import { LinearProgress } from "@mui/material";

interface FeedProps {
  videorender: (searchTerm: string) => Promise<void>;
}
const Feed: React.FC<FeedProps> = (props:any) => {
  const videos = useSelector((state: RootState) => state.youtube.videos);

  useEffect(() => {
    props.videorender('India')
  }, []);
videos.map((video) => {
  if (typeof video.id === 'object' && video.id !== null && 'videoId' in video.id) {
  } else if (typeof video.id === 'string') {
  } else {
    console.log("Could not find videoId for:", video);
  }
});

  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video,index) => (
          <VideoCard 
            key={index}
            videoId={video.id.videoId} 
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            thumbnail={video.snippet.thumbnails.high.url}
            description={video.snippet.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;