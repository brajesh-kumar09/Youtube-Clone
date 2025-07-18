import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchPopularVideos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: '50',
        regionCode: 'US',
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
