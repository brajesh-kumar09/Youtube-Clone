import React from "react";
import { Box, Button, LinearProgress } from "@mui/material";
import { click } from "@testing-library/user-event/dist/click";
import { setVideos, YouTubeVideo } from "../redux/slice/YoutubeSlice";
import { searchYouTubeVideos } from "../services/youtube";
import { useDispatch } from "react-redux";

// Sample category array
const categories = [
  "All",
  "Music",
  "Emraan Hashmi",
  "Pritam Chakraborty",
  "T-Series",
  "Arijit Singh",
  "Jukebox",
  "Irshad Kamil",
  "Sanam Teri Kasam",
  "Yo Yo Honey Singh",
  "Pritam Chakraborty",
  "T-Series",
  "Arijit Singh",
  "Jukebox",
  "Irshad Kamil",
  "Sanam Teri Kasam",
  "Yo Yo Honey Singh",
  "Yo Yo Honey Singh",
  "Pritam Chakraborty",
  "T-Series",
  "Arijit Singh",
  "Jukebox",
  "Irshad Kamil",
  "Sanam Teri Kasam",
  "Yo Yo Honey Singh",
];

const Scroller = (props:any) => {
  const clickSearch = async (cat: string) => {
    const searchTerm = cat === "All" ? "India news" : cat;
    props.videorender(searchTerm);
  };
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        gap: 1,
        p: 1,
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {categories.map((cat, index) => (
        <Button
          key={index}
          variant="text"
          sx={{ flexShrink: 0, textTransform: "none", color: "black", fontSize: 'small', backgroundColor: "#edeeef" }}
          onClick={() => clickSearch(cat)}
        >
          {cat}
        </Button>
      ))}
    </Box>
  );
};

export default Scroller;
