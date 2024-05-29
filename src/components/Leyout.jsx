import { Outlet } from "react-router-dom";
import { NavLinkItem, NavList } from "./List.styled";
import { GlobalStyle } from "GlobalStyle";
import { ListItem } from "@mui/material";

export const Leyout = () => {
    const colorMap = {
        home: "#ff000f",
        film: "#00ffff",
        ganres: "#00ff00",
    };

    const styleListItem = {
        width: "auto",
        p: 0,
        "& > .home.active": {
            boxShadow: `10px 5px 5px ${colorMap.home}`,
            color: `${colorMap.home}`,
        },
        "& > .film.active": {
            boxShadow: `10px 5px 5px ${colorMap.film}`,
            color: `${colorMap.film}`,
        },
        "& > .ganres.active": {
            boxShadow: `10px 5px 5px ${colorMap.ganres}`,
            color: `${colorMap.ganres}`,
        },
    };
    return (
        <>
            <NavList>
                <ListItem sx={styleListItem}>
                    <NavLinkItem className="home" to="/home">HOME</NavLinkItem>
                </ListItem>
                <ListItem sx={styleListItem}>
                    <NavLinkItem className="film" to="/film/823464">FILM</NavLinkItem>
                </ListItem>
                <ListItem sx={styleListItem}>
                    <NavLinkItem className="ganres" to="/ganers">GANERS</NavLinkItem>
                </ListItem>
            </NavList>
            <Outlet />

            <GlobalStyle />
        </>
    );
};
