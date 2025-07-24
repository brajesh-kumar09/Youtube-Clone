import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import {useSelector } from "react-redux";
import { RootState } from "../redux/store";
const VidPlayerFeed: React.FC = () => {

  const videos = useSelector((state: RootState) => state.youtube.videos);
  console.log(videos);
  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="flex-col justify-center gap-4">
        {videos.map((video,index) => (
          <VideoCard 
            key={index}
            videoId={video.id.videoId} 
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            thumbnail={video.snippet.thumbnails.high.url}
          />
        ))}
      </div>
    </div>
  );
};

export default VidPlayerFeed;
