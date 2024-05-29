import { Box, Container, Typography } from "@mui/material";
import { MostPopularFilms } from "components/MostPopularFilmCard";
import { SwiperComponent } from "components/SwiperComponent";

export const Home = () => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: "#222222",
                boxShadow: "rgba(0, 0, 0, 0.75) 0px -25px 92px 18px",
                borderTop: "5px solid #ff0000",
                paddingTop: "40px",
            }}
        >
            <Container maxWidth="xl">
                <Typography
                    sx={{ color: "#ff0000", display: "inline" }}
                    variant="h1"
                >
                    POPULARITY FILMS
                </Typography>
                <SwiperComponent />
                <MostPopularFilms/>
            </Container>
        </Box>
    );
};
