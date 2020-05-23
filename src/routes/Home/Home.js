import React from 'react';
import Slider from '../../Utilities/Slider';
import './Home.scss';

import { NavLink } from 'react-router-dom';
import configureSlidsStore from '../../hooks-store/slides';
import { useStore } from '../../hooks-store/store';

import Grid from '@material-ui/core/Grid';
import SpacingBlock from '../../Utilities/SpacingBlock';

import who_we_are_1 from './assets/whoami_1.jpg';
import who_we_are_2 from './assets/whoami_2.jpg';

configureSlidsStore();

const Home = (props) => {
    const state = useStore()[0];

    const images = require.context('./assets/slides', true);
    const slides = state.slides.map((item, i) => {
        return (
            <div key={i} data-targetslide={i}>
                <img src={images('./' + item.img)} alt={item.alt}></img>
            </div>
        );
    });

    const sliderParams = {
        autoplay: true,
        dots: false,
        fade: true,
        autoplaySpeed: 5000,
    };

    return (
        <main id="page" role="main" className="Home">
            <section id="gallery-section">
                <div id="gallery-wrapper">
                    <div className="gallery-content">
                        <Slider {...sliderParams} className="HomeSlider">
                            {slides}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="section-wrapper">
                <div className="content-inner">
                    <div className="html-block">
                        <h1
                            style={{
                                textAlign: 'center',
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            WHO WE ARE
                        </h1>
                        <h2
                            style={{
                                textAlign: 'center',
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            Leclair Decor is an Ottawa-based residential design
                            firm founded and co-owned by husband and wife team
                            Sacha and Melissa Leclair.
                        </h2>
                    </div>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <NavLink to="/about">
                                    <img src={who_we_are_1} alt="" />
                                </NavLink>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <NavLink to="/about">
                                    <img src={who_we_are_2} alt="" />
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                    <SpacingBlock></SpacingBlock>
                    <div className="html-block">
                        <h1
                            style={{
                                textAlign: 'center',
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            CONTACT US
                        </h1>
                        <p
                            style={{
                                textAlign: 'center',
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            General Inquiries |{' '}
                            <a href="mailto:hello@leclairdecor.com">
                                hello@leclairdecor.com{' '}
                            </a>{' '}
                            Marketing and Collaboration Inquiries |{' '}
                            <a href="mailto:sacha@leclairdecor.com">
                                sacha@leclairdecor.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
