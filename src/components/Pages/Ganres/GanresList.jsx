import { List, ListItem } from "@mui/material";
import { fetchGanreList } from "API";
import { NavLinkItemGenres } from "components/List.styled";
import { useEffect, useState } from "react";

export const GanersList = () => {
    const [ganers, setGaners] = useState([]);

    const getGangerFilm = async () => {
        const res = await fetchGanreList();
        setGaners(res);
    };
    useEffect(() => {
        getGangerFilm();
        console.log(ganers);
    }, []);
    return (
        <List
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                pt: "30px",
                borderTop: "10px solid #00ff00",
            }}
        >
            {ganers.length > 0 &&
                ganers.map((item) => (
                    <ListItem key={item.id} variant="body1">
                        <NavLinkItemGenres to={`${item.id}`}>
                            {item.name}
                        </NavLinkItemGenres>
                    </ListItem>
                ))}
        </List>
    );
};
