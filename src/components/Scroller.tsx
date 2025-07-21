import React from "react";
import { Box, Button } from "@mui/material";

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

const Scroller = () => {
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
          variant="outlined"
          sx={{ flexShrink: 0, textTransform: "none", color: "black", fontWeight: "bold", backgroundColor: "#edeeef" }}
        >
          {cat}
        </Button>
      ))}
    </Box>
  );
};

export default Scroller;
