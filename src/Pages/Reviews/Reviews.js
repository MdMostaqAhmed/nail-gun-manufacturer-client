import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
            '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div className="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
    };
    return (
        <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
                type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-12">
                {reviews
                    .slice(0)
                    .reverse()
                    .map((review, i) => (
                        <SwiperSlide>
                            <Review key={review._id} review={review}></Review>
                        </SwiperSlide>
                    ))}
            </div>
        </Swiper>
    );

};

export default Reviews;