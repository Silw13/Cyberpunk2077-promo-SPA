import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SLIDER_ENTITIES_LARGE = ['./slider images/1.jpg', './slider images/2.jpg', './slider images/3.jpg']
const SLIDER_ENTITIES_MEDIUM = ['./slider images/1_m.jpg', './slider images/2_m.jpg', './slider images/3_m.jpg']
const SLIDER_ENTITIES_SMALL = ['./slider images/1_s.jpg', './slider images/2_s.jpg', './slider images/3_s.jpg']

export default function Hero_slider() {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };

    return (
        <div className="slider__container">
            <Slider {...settings}>
                {SLIDER_ENTITIES_LARGE.map((entity, index) => (
                    <div className='slider' key={index}>
                        <img className='slider__slide' src={entity} alt="Кипебпанк постер" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}