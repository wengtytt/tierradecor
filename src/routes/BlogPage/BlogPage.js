import React, { useState, useEffect } from 'react';
import './BlogPage.scss';

import BlogContent from '../BlogContent';
import { blog } from '../../services';

import img_1 from './assets/img_1.jpeg';

const BlogPage = (props) => {

    const [info, setInfo] = useState({
        id: '',
        title: '',
        des: '',
        date: '',
        cover: [],
        alt: '',
        enabled: false,
        data: [],
        profile: true,
        editing: true,
        loaded: false,
    });

    useEffect(() => {
        const id = props.match.params.id;

        if (!info.loaded) {
            blog.getInfo(id).then((response) => {
                if (response.data) {
                    setInfo({
                        ...info,
                        id: id, //response.data.id,
                        loaded: true,
                        data: response.data
                    });
                }
            });
        }
    }, [info, props.match.params.id]);

    return (
        <main id="page" role="main" className="blog-page">
            <section className="section-wrapper">
                <div className="h1-block">
                    <div className="summary-date">{props.date_display}</div>
                    <h1 className="text-center">{props.title}</h1>
                </div>
            </section>
            <section className="section-wrapper">
                <BlogContent {...info}></BlogContent>;
            </section>
        </main>
    );
};

export default BlogPage;
