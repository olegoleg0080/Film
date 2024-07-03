import { getFilmById } from "API";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmCardById } from "./FilmCardById";
import { useDispatch, useSelector } from "react-redux";

export const FilmPageForId = () => {
    const dispatch = useDispatch();
    let filmId = useParams();
    const filmData = useSelector((state) => state.state.filmData);
    useEffect(() => {
        dispatch(getFilmById(filmId));
        console.log("use");
    }, [filmId, dispatch]);
    return (
        <>
            {filmData.length ? (
                <FilmCardById
                    imgPoster={filmData.poster_path}
                    imgBg={filmData.backdrop_path}
                    title={filmData.title}
                    rating={filmData.vote_average}
                    overview={filmData.overview}
                />
            ) : (
                <p>oops</p>
            )}
        </>
    );
};
