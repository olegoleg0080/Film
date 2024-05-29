import { Box, Typography } from "@mui/material";
import { fetchPopular } from "API";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

export const MostPopularFilms = () => {
    const [MostPopularsFilmList, setMostPopularsFilmList] = useState([]);
    const funcA = async () => {
        const result = await fetchPopular();
        setMostPopularsFilmList(result);
    };
    useEffect(() => {
        funcA();
    }, []);
    console.log(MostPopularsFilmList[0]);
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    pt: "90px",
                    alignItems: "center",
                    pb: "200px",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: "#ff0000",
                    }}
                >
                    MOST POPULAR FILM
                </Typography>
                {MostPopularsFilmList.length > 0 && (
                    <Box
                        sx={{
                            display: "flex",
                            gap: "20px",
                            boxShadow: "0px 20px 200px #f00",
                        }}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${MostPopularsFilmList[0].poster_path}`}
                            alt="img"
                            style={{
                                width: "260px",
                                height: "390px",
                            }}
                        />
                        <Box sx={{ maxWidth: "500px", p: "20px" }}>
                            <Typography
                                sx={{
                                    color: "#ff0000",
                                    fontSize: "30px",
                                    textAlign: "start",
                                }}
                                variant="h3"
                            >
                                {MostPopularsFilmList[0].original_title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: "#ff0000" }}
                            >
                                {MostPopularsFilmList[0].overview}
                            </Typography>
                            <StarRatings
                                rating={
                                    MostPopularsFilmList[0].vote_average / 2
                                }
                                numberOfStars={5}
                                name="rating"
                                starDimension="40px"
                                starSpacing="5px"
                                starRatedColor="#ff0000"
                            />
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    );
};
