import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        videoData:videoSlice,
    },
});

export default store;