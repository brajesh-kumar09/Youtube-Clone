import axios from 'axios';
import { YouTubeVideo } from '../redux/slice/YoutubeSlice';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
// interface YouTubeVideo {
//     id: { videoId: string };
//     snippet: {
//         title: string;
//         description: string;
//         thumbnails: { default: { url: string } };
//     };
// }

 const fetchPopularVideos = async () => {
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


async function searchYouTubeVideos(query: string): Promise<YouTubeVideo[]> {
    const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${encodeURIComponent(query)}&key=${API_KEY}`;
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.items as YouTubeVideo[];
    } catch (error) {
        console.error('YouTube API error:', error);
        return [];
    }
}

export { fetchPopularVideos, searchYouTubeVideos };

