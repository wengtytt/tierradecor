/* global jQuery, padding */
import React, { useEffect } from 'react';
import './Inspiration.scss';
import axios from 'axios';

const Inspiration = () => {
    // shopify
    const accessToken =
        'IGQVJVdThpTHZAKN0w4WDdFdEdkN0hvVkRiLThiY1B5M05GdkZAXVDJPQXdnbzNzZA0dOYXRRR3ZAYVEZAUTWNoTzdoRVJJSDFZAbHV1Y08tc3NDVnZATUWZA5WnZAPRDhJbktmSlBKTm1Bb2VB';
    const userId = 1167154712;

    axios
        .get('https://shopxixtest.herokuapp.com/token.js?const=myToken')
        .then((response) => {
            if (response.data) {
                console.dir('response.data -------------');
                console.dir(response.data);
                const str = response.data;
                const startIndex = "const myToken = '".length;
                const myToken = str.substring(startIndex, str.length - 3);
                console.dir('myToken -------------');
                console.dir(myToken);
            }
        });

    // markfod
    useEffect(() => {
        const token =
            'IGQVJVMWRwWGVGUzYtSkJNWnB6UUJLenp2eHdwc205REp1czJPM0ZA2Q2pJdHc4aEtfZAmVBTGk3T2hDWVViYjJqOTcxM1F0dXB3bzBNMEJIWVVRRXNUamdUWUpXMkVXdXRyblZAUektnMWxzc2ZAkY1VzSgZDZD';
        var feed = new window.Instafeed({
            get: 'user',
            // limit: 8,
            userId: userId,
            accessToken: token,
            template:
                '<a target="_blank" href="{{link}}"><img src="{{image}}" /><div class="instagram-post-stats"><div class="likes">{{likes}}</div><div class="comments">{{comments}}</div></div><i class="fa fa-instagram"></i></a>',
            resolution: 'standard_resolution',
            sortBy: 'most-recent',
        });
        feed.run();

        console.dir('feed - 1 -------------');
        console.dir(feed);
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

            <section class="gallery-container">
                <div id="instafeed"></div>
            </section>

        </main>
    );
};

export default Inspiration;
