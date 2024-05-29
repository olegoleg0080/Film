import { Box, Typography } from "@mui/material";
import { Link} from "react-router-dom";
import StarRatings from "react-star-ratings";

export const FilmCard = ({ title, overview, rating, img, id }) => {
    const src = `https://image.tmdb.org/t/p/w500${img}`;
    return (
            <Link style={{textDecoration: "none"}} to={`/film/${id}`}>
                <Box
                    sx={{
                        width: "250px",
                        height: "600px",
                        bgcolor: "#555",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0 10px 10px 10px",
                        gap: "5px",
                    }}
                >
                    <img
                        src={src}
                        alt="img"
                        style={{ width: "250px", height: "350px" }}
                    />
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: "30px",
                            textAlign: "center",
                            color: "#00ff00",
                        }}
                    >
                        {title}
                    </Typography>
                    <StarRatings
                        rating={rating / 2}
                        numberOfStars={5}
                        name="rating"
                        starDimension="30px"
                        starSpacing="5px"
                        starRatedColor="#00ff00"
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#00ff00",
                            overflow: "hidden",
                        }}
                    >
                        {overview}
                    </Typography>
                </Box>
            </Link>
    );
};
