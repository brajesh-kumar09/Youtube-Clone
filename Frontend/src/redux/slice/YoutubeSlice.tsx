import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface YouTubeVideo {
  id: {kind: string; videoId: string};
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      high: {
        url: string;
        width?: number;
        height?: number;
      };
      default?: { url: string; width?: number; height?: number; };
      medium?: { url: string; width?: number; height?: number; };
    };
    description?: string;
    publishedAt?: string;
  };
}

interface YouTubeState {
  videos: YouTubeVideo[];
}

const initialState: YouTubeState = {
  videos: [],
};

const youTubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    setVideos(state, action: PayloadAction<YouTubeVideo[]>) {
      state.videos = action.payload;
    },
   
  },
});

export const { setVideos} = youTubeSlice.actions;
export default youTubeSlice.reducer;