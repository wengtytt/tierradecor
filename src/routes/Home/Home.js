import React from 'react';
import Slider from '../../Utilities/Slider';
import './Home.scss';

// import { NavLink } from 'react-router-dom';
import configureSlidsStore from '../../hooks-store/slides';
import { useStore } from '../../hooks-store/store';

configureSlidsStore();

const Home = (props) => {
    const state = useStore()[0];

    const images = require.context('./assets/slides', true);
    const slides = state.slides.map((item, i) => {
        return (
            <div key={i} data-targetslide={i}>
                <img src={images('./' + item.img)}></img>
            </div>
        );
    });

    return (
        <main id="page" role="main" className="Home">
            <section>
                {/* <Slider className="HomeSlider">{slides}</Slider> */}
            </section>
        </main>
    );
};

export default Home;
