// import { Container } from "@mui/material";
import { Leyout } from "components/Leyout";
import { Film } from "components/Pages/Film";
import { Ganers } from "components/Pages/Ganers";
import { Home } from "components/Pages/Home";
import "./style.css";
import { Route, Routes } from "react-router-dom";
// import { Pereadresation } from "components/Pereadresation";
import { FilmListForGenres } from "components/Pages/Ganres/FilmListForGenres";
import { FilmPageForId } from "components/FilmPageForId";

export const App = () => {
    
    return (
        <>
            {/* <Container maxWidth="sm"> */}
            <Routes>
                <Route path="/" element={<Leyout />}>
                    <Route index path="home" element={<Home />} />
                    <Route path="film" element={<Film />} >
                        <Route path=":filmId" element={<FilmPageForId />} />
                    </Route>
                    <Route path="ganers" element={<Ganers />} >
                        <Route path=":ganerId" element={<FilmListForGenres />} />
                    </Route>
                    {/* <Route path="*" element={<Pereadresation/>}/> */}
                </Route>
            </Routes>
            {/* </Container> */}
        </>
    );
};
