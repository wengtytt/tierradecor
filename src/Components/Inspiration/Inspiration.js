import React, { useEffect } from 'react';
import './Inspiration.scss';
import axios from 'axios';
import Instafeed from "instafeed.js"

const Inspiration = () => {

    const accessToken = "IGQVJVdThpTHZAKN0w4WDdFdEdkN0hvVkRiLThiY1B5M05GdkZAXVDJPQXdnbzNzZA0dOYXRRR3ZAYVEZAUTWNoTzdoRVJJSDFZAbHV1Y08tc3NDVnZATUWZA5WnZAPRDhJbktmSlBKTm1Bb2VB";
    const userId = 1167154712;

    axios.get("https://shopxixtest.herokuapp.com/token.js?const=myToken").then((response) => {
        if (response.data) {
            console.dir("response.data -------------");
            console.dir(response.data)
            const str = response.data;
            const startIndex = "const myToken = '".length
            const myToken = str.substring(
                startIndex, 
                str.length - 3
            );
            console.dir("myToken -------------");
            console.dir(myToken);

            // var Instafeed = require("instafeed.js");
            var feed = new Instafeed({
                get: 'user',
                limit: 8,
                userId: userId,
                accessToken: myToken,
                // template: '<a target="_blank" href="{{link}}"><img src="{{image}}" /><div class="instagram-post-stats"><div class="likes">{{likes}}</div><div class="comments">{{comments}}</div></div><i class="fa fa-instagram"></i></a>',
                // resolution: 'standard_resolution',
                // sortBy: 'most-recent',
            });
            feed.run();

            console.dir("feed -------------");
            console.dir(feed);
        }
    });

    return (
        <main id="page" role="main" className="page">
            <div className="html-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {' '}
                    OUR INSTAGRAM{' '}
                </h1>
            </div>
            <div id="instafeed"></div>
        </main>
    );
};

export default Inspiration;
