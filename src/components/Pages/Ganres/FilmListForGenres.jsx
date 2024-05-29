import { Box } from "@mui/material";
import { fetchGanresById } from "API";
import { FilmCard } from "components/FilmCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FilmListForGenres = () => {
    const [filmList, setFilmList] = useState([]);
    let genreId = useParams();
    const getFilmGanger = async (id) => {
        const res = await fetchGanresById(id);
        console.log(res);
        setFilmList(res);
    };
    useEffect(() => {
        getFilmGanger(genreId);
    }, [genreId]);
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
            {filmList.length > 0 &&
                filmList.map((item) => (
                    <FilmCard
                        key={item.id}
                        id={item.id}
                        title={item.original_title}
                        overview={item.overview}
                        rating={item.vote_average}
                        img={item.poster_path}
                    />
                ))}
        </Box>
    );
};
