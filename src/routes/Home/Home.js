import React from 'react';
import { useState, useEffect } from 'react';
import Slider from '../../Utilities/Slider';
import './Home.scss';

import { NavLink } from 'react-router-dom';
import configureSlidsStore from '../../hooks-store/slides';
import { useStore } from '../../hooks-store/store';

import Grid from '@material-ui/core/Grid';
import SpacingBlock from '../../Utilities/SpacingBlock';

import who_we_are_1 from './assets/whoami_1.jpg';
import who_we_are_2 from './assets/whoami_2.jpg';

import blog_1 from './assets/blog_1.jpg';
import blog_2 from './assets/blog_2.jpg';

import { ReactTitle } from 'react-meta-tags';
import MetaTags from 'react-meta-tags';

import { blog } from '../../services';

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

    const about_us_3 = "Tierra Décor is built upon values and visions that remain foundational to our business. Fusing design moments over the years, we have essentially redefined design into something more expressive and individualized. "

    const [info, setInfo] = useState({
        blogs: [],
        loaded: false,
    });

    useEffect(() => {
        if (!info.loaded) {
            blog.get('', 1, 2, undefined).then((response) => {
                if (response.data) {
                    setInfo({
                        blogs: response.data,
                        loaded: true,
                    });
                }
            });
        }
    }, [info]);

    const blogMarkup = info.blogs.map((item) => {
        const title = item.title,
            date = item.date_display,
            cover = item.cover_image ? item.cover_image.location : blog_1;
        const alt = item.alt_text;

        return (
            <Grid key={item.blog_id} item xs={12} sm={6} className="blog-profile default">
                <NavLink to={{
                    pathname: `/blog/${item.blog_id}`,
                }}>
                    <div className="blog-image">
                        <div className="blog-img-link">
                            <img style={{
                                height: '100%'
                            }} src={cover} alt={alt} />
                        </div>
                    </div>
                    <div className="blog-meta summary-date">{date}</div>
                    <div className="blog-title summary-title">{title}</div>
                </NavLink>
            </Grid>
        );
    });

    return (
        <main id="page" role="main" className="Home">
            <ReactTitle title="Tierra Decor" />
            <MetaTags>
                <title>Tierra Decor</title>
                <meta name="About" content={about_us_3} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home — Tierra Decor" />
                <meta property="og:url" content="https://www.tierradecor.com/" />
                <meta itemProp="name" content="Home — Tierra Decor" />
                <meta itemProp="url" content="https://www.tierradecor.com/" />
            </MetaTags>

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
                            {about_us_3}
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
                            BLOG
                        </h1>
                    </div>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={4}>
                            {blogMarkup}
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
                        <p className="text-center">
                            General Inquiries |{' '}
                            <a href="mailto:sales@tierradecor.com">
                                sales@tierradecor.com{' '}
                            </a>{' '}
                            Address |{' '}
                            <span className="color-theme">
                                50 Colonnade Rd B200, Nepean, ON K2E 7J6 </span>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
