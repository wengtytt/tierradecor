import React, { useEffect } from 'react';
import './Inspiration.scss';
import Grid from '@material-ui/core/Grid';
import Search from '../../Components/Search';
import { useStore } from '../../hooks-store/store';
import instafeed from 'react-instafeed'
import axios from 'axios';
import Instafeed from "instafeed.js"

const Inspiration = () => {
    useEffect(() => {
        window.dispatchEvent(new CustomEvent('scroll'));
    }, []);

    // var request = new XMLHttpRequest();

    // request.open('GET', 'https://shopxixtest.herokuapp.com/token.js?const=CustomVarName', true);
    // request.onload = function () {
    //     if (request.status >= 200 && request.status < 400) {
    //         document.querySelector('#json-xmlhttp').innerHTML = request.responseText;
    //         console.dir(request)
    //     }
    // };
    // request.send();

    axios.get("https://shopxixtest.herokuapp.com/token.js?const=CustomVarName").then((response) => {
        if (response.data) {
            console.dir("==========")
            console.dir(response)
        }
    });

    const options = {
        accessToken: 'IGQVJVdThpTHZAKN0w4WDdFdEdkN0hvVkRiLThiY1B5M05GdkZAXVDJPQXdnbzNzZA0dOYXRRR3ZAYVEZAUTWNoTzdoRVJJSDFZAbHV1Y08tc3NDVnZATUWZA5WnZAPRDhJbktmSlBKTm1Bb2VB',

        get: 'user', // popular, user
        locationId: null,
        resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
        sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
        tagName: null,
        userId: 1167154712,
    }

    const data = instafeed(options)

    // var Instafeed = require("instafeed.js");

    var userFeed = new Instafeed({
        accessToken: "IGQVJVdThpTHZAKN0w4WDdFdEdkN0hvVkRiLThiY1B5M05GdkZAXVDJPQXdnbzNzZA0dOYXRRR3ZAYVEZAUTWNoTzdoRVJJSDFZAbHV1Y08tc3NDVnZATUWZA5WnZAPRDhJbktmSlBKTm1Bb2VB"
    });
    userFeed.run();
    var feed = new Instafeed({
        accessToken: "IGQVJVdThpTHZAKN0w4WDdFdEdkN0hvVkRiLThiY1B5M05GdkZAXVDJPQXdnbzNzZA0dOYXRRR3ZAYVEZAUTWNoTzdoRVJJSDFZAbHV1Y08tc3NDVnZATUWZA5WnZAPRDhJbktmSlBKTm1Bb2VB",
        transform: function (item) {
            console.dir("==========------")
            console.dir(item)
            var d = new Date(item.timestamp);
            item.date = [d.getDate(), d.getMonth(), d.getYear()].join('/');
            return item;
        }
    });

    feed.run();

    console.dir("==========")
    console.dir(data)

    console.dir("==========------")
    console.dir(feed)

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
            <p id="json-xmlhttp"></p>
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

export default Inspiration;
