import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './BlogPage.scss';

import BlogContent from '../BlogContent';
import { blog } from '../../services';

const BlogPage = (props) => {

    const [info, setInfo] = useState({
        id: '',
        title: '',
        date_display: '',
        cover_image: {},
        alt_text: '',
        enabled: false,
        data: [],
        loaded: false,
    });

    useEffect(() => {
        const id = props.match.params.id;

        if (!info.loaded) {
            blog.getInfo(id).then((response) => {
                if (response.data) {
                    setInfo({
                        ...info,
                        id: id,
                        title: response.data.blog.title,
                        date_display: moment(response.data.blog.date_display).format('YYYY-MM-DD HH:mm'),
                        cover_image: response.data.blog.cover_image,
                        alt_text: response.data.blog.alt_text,
                        loaded: true,
                        data: response.data.contents,
                    });
                }
            });
        }
    }, [info, props.match.params.id]);

    return (
        <main id="page" role="main" className="blog-page">
            <section className="section-wrapper">
                {/* <div className="h1-block">
                    <div className="summary-date">{info.date}</div>
                    <h1 className="text-center">{info.title}</h1>
                </div> */}
            </section>
            <section className="section-wrapper">
                <BlogContent {...info}></BlogContent>
            </section>
        </main>
    );
};

export default BlogPage;
