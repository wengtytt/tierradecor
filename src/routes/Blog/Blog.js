import React, { useState, useEffect } from 'react';
import './Blog.scss';
import Grid from '@material-ui/core/Grid';
import Search from '../../Components/Search';
import { NavLink } from 'react-router-dom';
// import { useStore } from '../../hooks-store/store';
import { ReactTitle } from 'react-meta-tags';
import MetaTags from 'react-meta-tags';
import { blog } from '../../services';
import debounce from 'lodash.debounce';

import blog_1 from './assets/blog_1.jpg';

const Blog = (props) => {
    useEffect(() => {
        //trigger the scroll to deal with the mobile navbar
        window.dispatchEvent(new CustomEvent('scroll'));
    }, []);

    const size = 10;

    const [state, setState] = useState({
        search: '',
        loadedAll: false,
        blogs: [],
        page: 1,
        lastId: undefined,
    });

    const onSearchChange = (search) => {
        setState({ ...state, ...{ search: search } });
    };

    const handleSearch = () => {
        setState({
            ...state,
            ...{
                loadedAll: false,
                blogs: [],
                page: 1,
                lastId: undefined,
            },
        });
    };

    const getBlogs = () => {
        if (!state.loadedAll) {
            blog.get(state.search, state.page, size, state.lastId)
                .then((response) => {
                    if (response.data.length === 0) {
                        return;
                    }

                    if (state.page === 1 && state.lastId === undefined) {
                        const temp = {
                            blogs: response.data,
                            page: state.page + 1,
                            lastId:
                                response.data[response.data.length - 1].blog_id,
                        };
                        if (response.data.length < size) {
                            setState({
                                ...state,
                                ...temp,
                                ...{ loadedAll: true },
                            });
                        } else {
                            setState({ ...state, ...temp });
                        }
                    } else {
                        const blogs = [...state.blogs, ...response.data];
                        const temp = {
                            blogs: blogs,
                            page: state.page + 1,
                            lastId: blogs[blogs.length - 1].blog_id,
                        };
                        if (response.data.length < size) {
                            setState({
                                ...state,
                                ...temp,
                                ...{ loadedAll: true },
                            });
                        } else {
                            setState({ ...state, ...temp });
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleSearchScroll = debounce(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            getBlogs();
        }
    }, 100);

    // Initial Load & Load more if not reach the bottom
    useEffect(() => {
        if (
            state.blogs.length === 0 ||
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight
        ) {
            getBlogs();
        }
    }, [state.blogs]);

    useEffect(() => {
        window.addEventListener('scroll', handleSearchScroll);

        return () => {
            window.removeEventListener('scroll', handleSearchScroll, false);
        };
    }, [handleSearchScroll]);

    const markup = state.blogs.map((item) => {
        const title = item.title,
            date = item.date_display,
            cover = item.cover_image ? item.cover_image.location : blog_1;
        const alt = item.alt_text;

        return (
            <Grid
                key={item.blog_id}
                item
                xs={12}
                sm={4}
                className="blog-profile default"
            >
                <NavLink
                    to={{
                        pathname: `/blog/${item.blog_id}`,
                    }}
                >
                    <div className="blog-image">
                        <span className="blog-img-link">
                            <img class="cover-img" src={cover} alt={alt} />
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
                <meta
                    name="About"
                    content="General Inquiries | sales@tierradecor.com  Address | 50 Colonnade Rd B200, Nepean, ON K2E 7J6"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog — Tierra Decor" />
                <meta
                    property="og:url"
                    content="https://www.tierradecor.com/blog"
                />
                <meta itemProp="name" content="Blog — Tierra Decor" />
                <meta
                    itemProp="url"
                    content="https://www.tierradecor.com/blog"
                />
            </MetaTags>

            <section className="section-wrapper">
                <div className="h1-block">
                    <h1
                        style={{
                            textAlign: 'center',
                            whiteSpace: 'pre-wrap',
                        }}
                    >
                        BLOG
                    </h1>
                </div>
                <div className="search">
                    <Search
                        placeholder="Search Blogs"
                        onChange={onSearchChange}
                        handleSearch={handleSearch}
                    ></Search>
                </div>
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
