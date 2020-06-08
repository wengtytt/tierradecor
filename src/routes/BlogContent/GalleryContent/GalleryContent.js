import React from 'react';
import './GalleryContent.scss';
import ImgContent from '../ImgContent';
import Grid from '@material-ui/core/Grid';

const GalleryContent = React.memo((props) => {
    const num = props.num || 3;
    const data = props.data || [];
    const spacing = typeof props.spacing !== 'undefined' ? props.spacing : 2;

    let markup = null;

    markup = data.map((item) => {
        const sm = 12 / num;
        return (
            <Grid key={item.id} item className="gallery-item" xs={12} sm={sm}>
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
