import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// *
export const fetchPopular = createAsyncThunk(
    "filmList/setMostPopularsFilmList",
    async (_, ThunkAPI) => {
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/discover/movie`,
                {
                    params: {
                        api_key: "6c0c9499c673661997a5615da330020f",
                    },
                }
            );
            return res.data.results;
        } catch (error) {
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);
// *
export const fetchGanresById = createAsyncThunk(
    "filmList/setFilmList",
    async (genresId, ThunkAPI) => {
        try {
            const res = await axios.get(
                "https://api.themoviedb.org/3/discover/movie",
                {
                    params: {
                        api_key: "6c0c9499c673661997a5615da330020f",
                        with_genres: genresId.ganerId,
                    },
                }
            );
            console.log(res.data.results);
            return res.data.results;
        } catch (error) {
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);
// *
export const fetchGanreList = createAsyncThunk(
    "filmList/setGanreFilmList",
    async (_, ThunkAPI) => {
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list`,
                {
                    params: {
                        api_key: "6c0c9499c673661997a5615da330020f",
                    },
                }
            );
            return res.data.genres;
        } catch (error) {
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);
// *
export const getFilmById = createAsyncThunk(
    "filmList/setFilmData",
    async ({filmId}, ThunkAPI) => {
        try {
            console.log(filmId);
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${filmId}`,
                {
                    params: {
                        api_key: "6c0c9499c673661997a5615da330020f",
                    },
                }
            );
            return res.data;
        } catch (error) {
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);
