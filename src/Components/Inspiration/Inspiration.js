/* global jQuery, padding */
import React, { useEffect } from 'react';
import './Inspiration.scss';
import axios from 'axios';
// require('./dist/instafeed.js');

// import { Instafeed } from './dist/instafeed.js';

const Inspiration = () => {
    // shopify
    // const accessToken =
    //     'IGQVJVdThpTHZAKN0w4WDdFdEdkN0hvVkRiLThiY1B5M05GdkZAXVDJPQXdnbzNzZA0dOYXRRR3ZAYVEZAUTWNoTzdoRVJJSDFZAbHV1Y08tc3NDVnZATUWZA5WnZAPRDhJbktmSlBKTm1Bb2VB';
    // const userId = 1167154712;

    // axios
    //     .get('https://shopxixtest.herokuapp.com/token.js?const=myToken')
    //     .then((response) => {
    //         if (response.data) {
    //             console.dir('response.data -------------');
    //             console.dir(response.data);
    //             const str = response.data;
    //             const startIndex = "const myToken = '".length;
    //             const myToken = str.substring(startIndex, str.length - 3);
    //             console.dir('myToken -------------');
    //             console.dir(myToken);

    //             // var Instafeed = require("instafeed.js");
    //             var feed = new Instafeed({
    //                 get: 'user',
    //                 limit: 8,
    //                 userId: userId,
    //                 accessToken: myToken,
    //                 // template: '<a target="_blank" href="{{link}}"><img src="{{image}}" /><div class="instagram-post-stats"><div class="likes">{{likes}}</div><div class="comments">{{comments}}</div></div><i class="fa fa-instagram"></i></a>',
    //                 // resolution: 'standard_resolution',
    //                 // sortBy: 'most-recent',
    //             });
    //             feed.run();

    //             console.dir('feed -------------');
    //             console.dir(feed);
    //         }
    //     });

    // // markfod
    // const accessToken1 =
    //     'IGQVJXbHAxM2tydUt1VVJjVWozeXlLLVNvSGIzSTJnRFhmWFVNSGFkcmJ5QlFBdFdPa2dfbHVXbzZAqSjZAxNHA3NnQxa0xIaEJHSFVqaVZAUYUdvc2hfRUpyXzhISHlhYjJCNVM2V0ZAlVW1xUy1xY19QbAZDZD';
    // // var Instafeed = require("instafeed.js");
    // var feed1 = new Instafeed({
    //     get: 'user',
    //     limit: 8,
    //     userId: userId,
    //     accessToken: accessToken1,
    //     template:
    //         '<a target="_blank" href="{{link}}"><img src="{{image}}" /><div class="instagram-post-stats"><div class="likes">{{likes}}</div><div class="comments">{{comments}}</div></div><i class="fa fa-instagram"></i></a>',
    //     resolution: 'standard_resolution',
    //     sortBy: 'most-recent',
    // });
    // feed1.run();

    // console.dir('feed - 1 -------------');
    // console.dir(feed1);
    useEffect(() => {
        const token =
            'IGQVJVMWRwWGVGUzYtSkJNWnB6UUJLenp2eHdwc205REp1czJPM0ZA2Q2pJdHc4aEtfZAmVBTGk3T2hDWVViYjJqOTcxM1F0dXB3bzBNMEJIWVVRRXNUamdUWUpXMkVXdXRyblZAUektnMWxzc2ZAkY1VzSgZDZD';
        var feed = new window.Instafeed({
            accessToken: token,
            transform: function (item) {
                var d = new Date(item.timestamp);
                item.date = [d.getDate(), d.getMonth(), d.getYear()].join('/');
                return item;
            },
        });
        feed.run();
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

            <p>insta starts here</p>
            <div id="instafeed"></div>
            <p>insta ends here</p>
        </main>
    );
};

export default Inspiration;
