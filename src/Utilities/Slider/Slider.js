import React from 'react';
import './Slider.scss';
import SlickSlider from 'react-slick';

const Slider = props => {
    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    console.log(props);

    const sliderSettings = {
        ...defaultSettings,
        className: props.className
    };

    return <SlickSlider {...sliderSettings}>{props.children}</SlickSlider>;
};

export default Slider;
