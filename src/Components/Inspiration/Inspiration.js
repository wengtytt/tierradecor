/* global jQuery, padding */
import React, { useEffect } from 'react';
import './Inspiration.scss';
import axios from 'axios';

const Inspiration = () => {

    const inspiration_desc = "Tierra Décor takes pride in every creation they have made, from the smallest bathrooms to the most grandiose kitchen. In doing so, we have created a repository of photos and designs for our new clients to take a look at and draw inspiration from. Each of these designs has been made by our dedicated team members for our former clients; if you work with us, we will provide the same unparalleled care and attention that we put in our previous pieces of work. Whether you come with your own design already ready or choose to draw inspirations from one of the examples below, we will infuse your personality into every piece of work we create for you."

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
                '<div class="picture-container"><a target="_blank" href="{{link}}"><img alt="{{caption}}" title="{{caption}}" src="{{image}}" /></a></div>',
            resolution: 'standard_resolution',
            sortBy: 'most-recent',
        });
        feed.run();

        console.dir('feed - 1 -------------');
        console.dir(feed);
    });

    return (
        <main id="page" role="main" className="page">
            <div className="h1-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    Inspiration
                </h1>
            </div>

            <div className="h1-block">
                <p>{inspiration_desc}</p>
            </div>

            <div id="instafeed"></div>

        </main>
    );
};

export default Inspiration;
