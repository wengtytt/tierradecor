import React, { useEffect } from 'react';
import './Blog.scss';
import Grid from '@material-ui/core/Grid';
import Search from '../../Components/Search';
import { NavLink } from 'react-router-dom';
import { useStore } from '../../hooks-store/store';
import { ReactTitle } from 'react-meta-tags';
import MetaTags from 'react-meta-tags';

import blog_1 from './assets/blog_1.jpg';

const Blog = (props) => {
    useEffect(() => {
        window.dispatchEvent(new CustomEvent('scroll'));
    }, []);

    const state = useStore()[0];
    const blogs = state.blogs;

    const markup = blogs.map((item) => {
        let img = item.largeImageURL;

        let cover = blog_1;
        let alt = item.alt;
        let title = item.tags;
        let date = "MAY 29, 2020"

        return (
            <Grid key={item.id} item xs={12} sm={4} className="blog-profile default">
                <NavLink
                    to={{
                        pathname: `/blog/${item.id}`,
                    }}
                >
                    <div className="blog-image">
                        <span className="blog-img-link">
                            <img src={cover} alt={alt} />
                        </span>
                    </div>
                    <div className="blog-meta summary-date">{date}</div>
                    <span className="blog-title summary-title">{title}</span>
                </NavLink>
            </Grid>
        );
    });

    return (
        <main id="page" role="main" className="blog">
            <ReactTitle title="Blog" />
            <MetaTags>
                <title>Blog</title>
                <meta name="About" content="General Inquiries | sales@tierradecor.com  Address | 50 Colonnade Rd B200, Nepean, ON K2E 7J6" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog — Tierra Decor" />
                <meta property="og:url" content="https://www.tierradecor.com/blog" />
                <meta itemProp="name" content="Blog — Tierra Decor" />
                <meta itemProp="url" content="https://www.tierradecor.com/blog" />
            </MetaTags>

            <section className="section-wrapper">
                <div className="h1-block">
                    <h1
                        style={{
                            textAlign: 'center',
                            whiteSpace: 'pre-wrap',
                        }}>
                        BLOG
                </h1>
                </div>
                <div className="search"><Search></Search></div>
            </section>

            <section className="section-wrapper">
                <Grid
                    container
                    className="blog-list"
                    spacing={3}
                    justify="flex-start"
                >
                    {markup}
                </Grid>
            </section>
        </main>
    );
};

export default Blog;
