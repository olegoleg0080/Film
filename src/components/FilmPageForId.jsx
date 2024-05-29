import { getFilmById } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmCardById } from "./FilmCardById";

export const FilmPageForId = () => {
    let filmId = useParams();
    const [filmData, setFilmData] = useState("");
    const getFilmData = async (id) => {
        const res = await getFilmById(id);
        console.log(res);
        setFilmData(res);
    };
    useEffect(() => {
        getFilmData(filmId);
    }, [filmId]);

    return (
        <>
            {filmData ? (
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
