import React from 'react';
import './ImgContent.scss';

const ImgContent = React.memo((props) => {
    const url =
        props.json_data && props.json_data.image
            ? props.json_data.image.location
            : 'https://images.squarespace-cdn.com/content/v1/5b8d9fce1aef1d492e39c994/1590523853478-ZMMG6JFMGHZAEFVDVQ4M/ke17ZwdGBToddI8pDm48kBP_h7rTOilGdNQ35N42xoZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0plef_PmwB6-3GP4qDbCUv-eHGRaV4yzzUVdkT1Ca3D-f2SfQ-WQIutSFBrbQBmsvg/4F88797E-7BD4-4250-8F60-475E15F14B6A.JPG';
    const link = props.json_data ? props.json_data.link : '';

    let markup;

    if (link) {
        markup = (
            <a href={link}>
                <img
                    src={url}
                    alt={props.json_data ? props.json_data.alt : ''}
                ></img>
            </a>
        );
    } else {
        markup = (
            <img
                src={url}
                alt={props.json_data ? props.json_data.alt : ''}
            ></img>
        );
    }

    return (
        <div className={`img-content ${props.json_data.style}`}>{markup}</div>
    );
});

export default ImgContent;
