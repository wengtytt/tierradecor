import React from 'react';
import './BlogContent.scss';
// import { useStore } from '../../hooks-store/store';
import Grid from '@material-ui/core/Grid';
import TextContent from './TextContent';
import ImgContent from './ImgContent';
import GalleryContent from './GalleryContent';

const BlogContent = (props) => {

    const data = props.data.map((item, i) => {
        switch (item.content_type) {
            case 'text':
                return <TextContent key={item.blog_content_id} {...item}></TextContent>;
            case 'image':
                return <ImgContent key={item.blog_content_id} {...item}></ImgContent>;
            case 'gallery':
                return <GalleryContent key={item.blog_content_id} {...item}></GalleryContent>;
            default:
                return null;
        }
    });

    return (
        <Grid container className="blog-content default">
            <Grid item xs={12} className="blog-inner">
                <div className="blog-header">
                    <div className="blog-meta">{props.date_display}</div>
                    <div className="blog-title">{props.title}</div>
                </div>
                <div className="blog-data">{data}</div>
            </Grid>
        </Grid>
    );
};

export default BlogContent;
