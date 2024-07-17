import "./style.css";
import { Leyout } from "components/Leyout";
import { Film } from "components/Pages/Film";
import { Ganers } from "components/Pages/Ganers";
import { Home } from "components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import { FilmListForGenres } from "components/Pages/Ganres/FilmListForGenres";
import { FilmPageForId } from "components/FilmPageForId";


export const App = () => {
    
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Leyout />}>
                    <Route index element={<Home />} />
                    <Route path="film" element={<Film />} />
                    <Route path="film/:filmId" element={<FilmPageForId />} />
                    <Route path="ganers" element={<Ganers />}>
                        <Route
                            path=":ganerId"
                            element={<FilmListForGenres />}
                        />
                    </Route>
                    {/* <Route path="*" element={<Pereadresation/>}/> */}
                </Route>
            </Routes>
        
        </>
    );
};
