import React from 'react';
import './GalleryContent.scss';
import ImgContent from '../ImgContent';
import Grid from '@material-ui/core/Grid';

const GalleryContent = React.memo((props) => {
    const num = props.json_data && props.json_data.num !== 'undefined' ? props.json_data.num : 3;
    const spacing = props.json_data && props.json_data.spacing !== 'undefined' ? props.json_data.spacing : 2;
    const data = props.images || [];

    let markup = null;

    markup = data.map((item) => {
        const sm = 12 / num;
        return (
            <Grid key={item.blog_content_id} item className="gallery-item" xs={12} sm={sm}>
                <ImgContent {...item}></ImgContent>
            </Grid>
        );
    });

    return (
        <div className="gallery-content default">
            <Grid container spacing={spacing}>
                {markup}
            </Grid>
        </div>
    );
});

export default GalleryContent;
