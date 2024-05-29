import { Box, Container } from "@mui/material";
import { GanersList } from "./Ganres/GanresList";
import { Outlet } from "react-router-dom";

export const Ganers = () => {
    return (
        <>
            <Container
                sx={{ display: "grid", gridTemplateColumns: "19% 79%", gridGap: "10px"}}
                maxWidth="xl"
            >
                <Box sx={{}}>
                    <GanersList />
                </Box>
                <Outlet />
            </Container>
        </>
    );
};
