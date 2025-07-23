import { configureStore } from "@reduxjs/toolkit";
import Users from "./slice/UserSlice";
import YouTube from "./slice/YoutubeSlice";

const store = configureStore({
    reducer: {
        users: Users,
        youtube: YouTube,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;