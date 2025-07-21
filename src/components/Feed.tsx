import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { fetchPopularVideos } from '../api/youtube';

const Feed: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchPopularVideos();
      setVideos(data);
      setLoading(false);
    };
    getVideos();
  }, []);

  if (loading) return <p className="text-center text-lg mt-20">Loading...</p>;

  return (
    <div className="flex-1 bg-[#f9f9f9] pt-6 px-6 min-h-screen overflow-y-auto pl-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            videoId={video.id}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            views={`${Number(video.statistics.viewCount).toLocaleString()} views`}
            thumbnail={video.snippet.thumbnails.high.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
