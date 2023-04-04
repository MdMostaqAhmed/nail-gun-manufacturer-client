import React, { useEffect } from 'react';

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
        <div>

        </div>
    );
};

export default Reviews;