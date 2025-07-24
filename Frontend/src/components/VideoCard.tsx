import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface VideoCardProps {
  title: string;
  channel: string;
  thumbnail: string;
  videoId: string;
  description?: string; 
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  channel,
  thumbnail,
  videoId,
  description
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/vp/${videoId}`,
      {
        state: {
          videoId: videoId,
          title: title,
          channel: channel,
          thumbnail: thumbnail,
          description
        },
      }
    )
  };

  return (
    <Card
      onClick={handleClick}
      className="w-[320px] cursor-pointer rounded-4xl border-none shadow-none transition-transform hover:scale-[1.01] m-0"
      elevation={0}
    >
      <CardMedia
        component="img"
        image={thumbnail}
        alt={title}
        className="aspect-video"
      />
      <CardContent className="bg-white px-2 py-1">
        <Typography variant="subtitle2" className="font-semibold line-clamp-2 text-sm leading-tight">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="text-xs">
          {channel}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
