import React from "react";
import "./About.scss";
import { useStore } from "../../hooks-store/store";
import { NavLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import SpacingBlock from '../../Utilities/SpacingBlock';

import AboutUs_1 from "./assets/AboutUs_1.jpg";
import AboutUs_2 from "./assets/AboutUs_2.jpg";

const About = (props) => {
    const state = useStore()[0];

    const navList = state.navs.map((item, i) => {
        if (item.path === "/") {
            return (
                <div key={i} className="index">
                    <NavLink to={item.path} exact>
                        {item.label}
                    </NavLink>
                </div>
            );
        }

        let className = item.external ? "external" : "collection";

        return (
            <div key={i} className={className}>
                <NavLink to={item.path}>{item.label}</NavLink>
            </div>
        );
    });

    return (
        <main id="page" role="main" className="About">
            <div className="content-inner">
                <div className="html-block">
                    <h1
                        style={{
                            textAlign: 'center',
                            whiteSpace: 'pre-wrap',
                        }}
                    > ABOUT </h1>
                </div>

                <section className="section-wrapper">
                    <div className="content-inner">
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
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="content-inner">
                        <p
                            style={{
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            Leclair Decor is an Ottawa-based full service design firm, founded and co-led by husband and wife team, Sacha and Melissa Leclair. The business (just a side hustle at first) began in 2011, after we bought and revamped our first home and started receiving inquiries from friends and family about decorating services for their spaces.
                        </p>
                        <p
                            style={{
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            Since then, the company has evolved into a full-fledged residential design firm, with a principle focus on larger scale remodels and new builds. Though we are still based in Ottawa, our talented design team now serves clients across North America, using top notch software and embracing all modern means of digital communication to work seamlessly with homeowners throughout Canada and the US.
                        </p>
                        <p
                            style={{
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            We’ve always believed that a home comes to life when crisp, modern lines are paired with warmer textures and natural elements. It’s this signature Warm Modern aesthetic, in combination with our streamlined project management system, that sets us apart and has garnered us an international following.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
