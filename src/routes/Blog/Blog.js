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
            </Grid>
        );
    });

    return (
        <main id="page" role="main" className="page">
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item xs={false} sm={4}></Grid>
                    <Grid item xs={12} sm={4} className="blog-title">
                        <h1 style={{ textAlign: 'center' }}>BLOG</h1>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Search></Search>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                className="blog-list"
                spacing={3}
                justify="flex-start"
            >
                {markup}
            </Grid>
        </main>
    );
};

export default Blog;
