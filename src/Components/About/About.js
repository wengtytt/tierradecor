import React from 'react';
import './About.scss';
// import { useStore } from "../../hooks-store/store";
import { NavLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
// import SpacingBlock from '../../Utilities/SpacingBlock';

import AboutUs_1 from './assets/AboutUs_1.jpg';
import AboutUs_2 from './assets/AboutUs_2.jpg';

const About = (props) => {
    const about_us_1 = "Founded in [year], Tierra Décor has revolutionized the world of design from that moment onward."
    const about_us_2 = "We pride ourselves in our ability to capture the timeless creations through our modern and unique taste. For the past [number] years, we have followed contemporary and influential design movements to establish our place at the forefront of the decor and renovation community. "
    const about_us_3 = "Tierra Décor is built upon values and visions that remain foundational to our business. Fusing design moments over the years, we have essentially redefined design into something more expressive and individualized. "
    return (
        <main id="page" role="main" className="About">
            <div className="html-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {' '}
                    ABOUT{' '}
                </h1>
            </div>

            <section className="section-wrapper">
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <NavLink to="/about">
                                <img src={AboutUs_1} alt="" />
                            </NavLink>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <NavLink to="/about">
                                <img src={AboutUs_2} alt="" />
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

            <section className="section-wrapper">
                <div className="content-inner">
                    <p>{about_us_1}</p>
                    <p>{about_us_2}</p>
                    <p>{about_us_3}</p>
                </div>
            </section>
        </main>
    );
};

export default About;
