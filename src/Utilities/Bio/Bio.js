import React from 'react';
import './Bio.scss';
import Grid from "@material-ui/core/Grid";

const Bio = (props) => {
    console.dir(props);
    console.dir("================");

    const member = {
        id: props.id,
        name: props.name,
        bio: props.bio,
        img: props.img,
        alt: props.alt
    };

    return (
        <Grid key={member.id} item xs={12}>
            <Grid container item justify="center">
                <Grid item xs={12} sm={4}>
                    <img src={member.img} alt={member.alt}></img>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <h1>{member.name}</h1>
                    <p>{member.bio}</p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Bio;
