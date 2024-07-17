import { Box } from "@mui/material";
import { fetchGanresById } from "API";
import { FilmCard } from "components/FilmCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filmListSelector } from "../../../redux/selectors";

export const FilmListForGenres = () => {
    const dispatch = useDispatch();
    const filmList = useSelector(filmListSelector);
    let genreId = useParams();
    useEffect(() => {
        console.log("dispatch: gen");
        dispatch(fetchGanresById(genreId));
    }, [genreId, dispatch]);
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
