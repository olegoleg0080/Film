import { List, ListItem } from "@mui/material";
import { fetchGanreList } from "API";
import { NavLinkItemGenres } from "components/List.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genresSelector } from "../../../redux/selectors";

export const GanersList = () => {
    const dispatch = useDispatch();
    const ganers = useSelector(genresSelector);
    useEffect(() => {
        dispatch(fetchGanreList());
    }, [dispatch]);
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
