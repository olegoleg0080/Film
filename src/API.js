import axios from "axios";

export const fetchPopular = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
        params: {
            api_key: "6c0c9499c673661997a5615da330020f",
        },
    });
    return res.data.results;
};

export const fetchGanresById = async (genresId) => {
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: "6c0c9499c673661997a5615da330020f",
            with_genres: genresId.ganerId,
        },
    });
    return res.data.results;
};

export const fetchGanreList = async () => {
    const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list`,
        {
            params: {
                api_key: "6c0c9499c673661997a5615da330020f",
            },
        }
    );
    return res.data.genres;
};

export async function getFilmById({filmId}) {
    const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}`,
        {
            params: {
                api_key: "6c0c9499c673661997a5615da330020f",
            },
        }
    );
    return res.data;
}
