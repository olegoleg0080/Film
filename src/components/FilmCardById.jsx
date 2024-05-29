import { Box, Container, Typography } from "@mui/material";
import StarRatings from "react-star-ratings";

export const FilmCardById = ({ imgPoster, imgBg, rating, title, overview }) => {
    const srcPoster = `https://image.tmdb.org/t/p/w500${imgPoster}`;
    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "grid",
                gridTemplateColumns: "400px 700px",
                gridGap: "50px",
                pt: "40px",
                pb: "70px",
                borderTop: "10px solid #0ffff0",
            }}
        >
            <img
                src={srcPoster}
                alt="img"
                style={{ width: "400px", height: "600px", gridRow: "1/4" }}
            />
            <Box>
                <Typography variant="h2" sx={{ color: "#0ffff0" }}>
                    {title}
                </Typography>
                <StarRatings
                    rating={rating / 2}
                    numberOfStars={5}
                    name="rating"
                    starDimension="70px"
                    starSpacing="5px"
                    starRatedColor="#0ffff0"
                />
            </Box>
            <Typography sx={{ color: "#0ffff0" }} variant="body1">
                {overview}
            </Typography>
        </Container>
    );
};
