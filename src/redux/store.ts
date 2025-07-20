import { configureStore } from "@reduxjs/toolkit";
import Users from "./slice/UserSlice";

const store=configureStore({
    reducer:{
        users:Users
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;