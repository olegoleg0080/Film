import { Box, Typography } from "@mui/material";
import StarRatings from "react-star-ratings";

export const SwiperItem = ({ raiting, title, img, overview }) => {
    const src = `https://image.tmdb.org/t/p/w500${img}`;
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                gap: "20px",
            }}
        >
            <img
                src={src}
                alt="img"
                style={{ width: "460px", height: "690px" }}
            />
            <Typography
                sx={{ color: "#ff0000", fontSize: "30px", textAlign: "center" }}
                variant="h3"
            >
                {title}
            </Typography>
            <StarRatings
                rating={raiting / 2}
                numberOfStars={5}
                name="rating"
                starDimension="40px"
                starSpacing="5px"
                starRatedColor="#ff0000"
            />
            {/* <Typography variant="body" sx={{color: "#ff0000"}}>{overview}</Typography> */}
        </Box>
    );
};
