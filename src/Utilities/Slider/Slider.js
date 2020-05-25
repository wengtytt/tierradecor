import React from 'react';
import './Slider.scss';
import SlickSlider from 'react-slick';

const Slider = (props) => {

    console.dir(props);
    console.dir("============cccc====");

    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sliderSettings = {
        ...defaultSettings,
        ...props,
    };

    return <SlickSlider {...sliderSettings}>{props.children}</SlickSlider>;
};

export default Slider;
