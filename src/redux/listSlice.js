import { createSlice } from "@reduxjs/toolkit";
import {
    fetchGanreList,
    fetchGanresById,
    fetchPopular,
    getFilmById,
} from "API";

const popularFilmListSlice = createSlice({
    name: "filmList",
    initialState: {
        list: [],
        filmData: {},
        mostPopularsFilmList: [],
        filmList: [],
        ganers: [],
        Loading: false,
    },
    extraReducers: (builder) =>
        builder
            // *setPopularFilmList
            .addCase(fetchPopular.pending, (state, action) => {
                console.log("pending");
                state.Loading = true;
            })
            .addCase(fetchPopular.fulfilled, (state, action) => {
                state.list = action.payload;
                state.mostPopularsFilmList = action.payload;
                state.Loading = false;
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                console.log("rejected");
                state.Loading = false;
            })
            // *setFilmData
            .addCase(getFilmById.pending, (state, action) => {
                console.log("pending");
                state.Loading = true;
            })
            .addCase(getFilmById.fulfilled, (state, action) => {
                // state.filmData = action.payload;
                console.log(action.payload);
                state.Loading = false;
            })
            .addCase(getFilmById.rejected, (state, action) => {
                console.log("rejected");
                state.Loading = false;
            })
            // // *setMostPopularsFilmList
            // .addCase(fetchPopular.pending, (state, action) => {
            //     console.log("pending");
            // })
            // .addCase(fetchPopular.fulfilled, (state, action) => {
            //     state.mostPopularsFilmList = action.payload;
            // })
            // .addCase(fetchPopular.rejected, (state, action) => {
            //     console.log("rejected");
            // })
            .addCase(fetchGanresById.pending, (state, action) => {
                console.log("pending");
                state.Loading = true;
            })
            .addCase(fetchGanresById.fulfilled, (state, action) => {
                state.filmList = action.payload;
                state.Loading = false;
            })
            .addCase(fetchGanresById.rejected, (state, action) => {
                console.log("rejected");
                state.Loading = false;
            })
            .addCase(fetchGanreList.pending, (state, action) => {
                console.log("pending");
                state.Loading = true;
            })
            .addCase(fetchGanreList.fulfilled, (state, action) => {
                state.ganers = action.payload;
                state.Loading = false;
            })
            .addCase(fetchGanreList.rejected, (state, action) => {
                console.log("rejected");
                state.Loading = false;
            }),
});

export const popularFilmListReducer = popularFilmListSlice.reducer;
