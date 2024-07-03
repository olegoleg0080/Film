import { configureStore } from "@reduxjs/toolkit";
import { popularFilmListReducer } from "./listSlice";

export const store = configureStore({
    reducer: {
        state: popularFilmListReducer,
    },
});
