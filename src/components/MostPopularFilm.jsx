import { Box, Rating, Typography } from "@mui/material";

export const SwiperItem = ({ raiting, title, img ,overview}) => {
    const src = `https://image.tmdb.org/t/p/w500${img}`;
    
    return (
        <Box sx={{display: "flex", flexDirection: "column", overflow: "hidden", gap: "20px"}}>
            <img src={src} alt="img" />
            <Typography
                sx={{ color: "#ff0000", fontSize: "30px", textAlign: "center" }}
                variant="h3"
            >
                {title}
            </Typography>
            <Rating
                name="rating"
                defaultValue={raiting / 2}
                precision={0.5}
                readOnly
            />
            <Typography variant="body" sx={{color: "#ff0000"}}>{overview}</Typography>
        </Box>
    );
};
