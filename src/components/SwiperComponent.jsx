import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { fetchPopular } from "API";
import { useEffect } from "react";
import { SwiperItem } from "./SwiperItem";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { popularFilmListSelector } from "../redux/selectors";

export const SwiperComponent = () => {
    const dispatch = useDispatch();
    const PopularsFilmList = useSelector(popularFilmListSelector);
    useEffect(() => {
        dispatch(fetchPopular())
    }, [dispatch]);

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            loop={true}
            style={{ marginTop: "40px" }}
        >
            {PopularsFilmList.length > 0 &&
                PopularsFilmList.map((item) => (
                    <SwiperSlide key={item.id}>
                        <SwiperItem
                            key={item.id}
                            img={item.poster_path}
                            raiting={item.vote_average}
                            title={item.original_title}
                            overview={item.overview}
                        ></SwiperItem>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};
