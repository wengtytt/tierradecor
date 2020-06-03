import React, { useEffect } from 'react';
import './Blog.scss';
import Grid from '@material-ui/core/Grid';
import Search from '../../Components/Search';
import { useStore } from '../../hooks-store/store';

const Blog = () => {
    useEffect(() => {
        window.dispatchEvent(new CustomEvent('scroll'));
    }, []);

    const state = useStore()[0];
    const blogs = state.blogs;

    const markup = blogs.map((item) => {
        let img = item.largeImageURL;
        return (
            <Grid key={item.id} item className="blog-item" xs={12} sm={4}>
                <div className="cover">
                    <img src={img} alt={item.tags}></img>
                </div>
                <h2 id={item.id}>{item.tags}</h2>
                <div className="author">CANDACE PLOTZ - MAY 29, 2020</div>
                <p>I often hear from clients that they’re not sure what to do with their mantel - so I want to share some Do’s and Don’ts on how to decorate. I want this to be fun and I hope these tips help you get off to the right start.</p>
                <span>Read More →</span>
            </Grid>
        );
    });

    return (
        <main id="page" role="main" className="blog">
            <section className="section-wrapper">
                <div className="h1-block">
                    <h1
                        style={{
                            textAlign: 'center',
                            whiteSpace: 'pre-wrap',
                        }}>
                        Blog
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
