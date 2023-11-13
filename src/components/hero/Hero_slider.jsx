import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SLIDER_ENTITIES = ['./slider images/1.jpg', './slider images/2.jpg', './slider images/3.jpg']


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
        width: 1920,    
        height: 1000

    };

    return (
        <div>
            <Slider {...settings}>
                {SLIDER_ENTITIES.map((entity, index) => (
                    <div className='slider' key={index}>
                        <img className='slider__slide' src={entity} alt="Кипебпанк постер" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}