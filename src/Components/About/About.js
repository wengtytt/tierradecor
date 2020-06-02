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

    const our_value_1 = "Nothing great was ever made without challenging the status quo that called for change. We don’t use quick trends or outdated ideas to define our style choices. Instead, we call for the revitalization of traditional designs through innovation and self-expression."
    const our_value_2 = "We know how important intricacy is when trying to convey a message through your design and household. One detail out of place could be the difference between something extraordinary and something that is simply uninteresting. We hold a sharp eye out for the smallest details to make sure your kitchen or bathroom is perfect."
    const our_value_3 = "Tierra Décor has built its own style of design through its principles of balance. Being able to flawlessly combine traditional techniques with individual ideas is our speciality, and we unmovable abide by this idea."

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

                <div className="content-inner">
                    <h2>We challenge the norm!</h2>
                    <p>{our_value_1}</p>
                </div>

                <div className="content-inner">
                    <h2>Detail is key!</h2>
                    <p>{our_value_2}</p>
                </div>

                <div className="content-inner">
                    <h2>Beauty and balance!</h2>
                    <p>{our_value_3}</p>
                </div>
                
            </section>
        </main>
    );
};

export default About;
