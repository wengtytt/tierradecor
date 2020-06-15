import React from 'react';
import './BlogContent.scss';
// import { useStore } from '../../hooks-store/store';
import Grid from '@material-ui/core/Grid';
import TextContent from './TextContent';
import ImgContent from './ImgContent';
import GalleryContent from './GalleryContent';

const BlogContent = (props) => {
    // const id = props.id;
    console.dir('=============');
    console.dir(props);

    const blogContents = [];

    const data = blogContents.map((item, i) => {
        switch (item.type) {
            case 'text':
                return <TextContent key={i} {...item}></TextContent>;
            case 'img':
                return <ImgContent key={i} {...item}></ImgContent>;
            case 'gallery':
                return <GalleryContent key={i} {...item}></GalleryContent>;
            default:
                return null;
        }
    });

    return (
        <Grid container className="blog-content default">
            <Grid item xs={2}></Grid>
            <Grid item xs={8} className="blog-inner">
                <div className="blog-header">
                    <div className="blog-meta">{props.date}</div>
                    <div className="blog-title">{props.title}</div>
                </div>
                <div className="blog-data">{data}</div>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
};

export default BlogContent;
