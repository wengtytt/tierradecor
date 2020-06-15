/* global jQuery, padding */
import React, { useEffect } from 'react';
import './Inspiration.scss';
import { ReactTitle } from 'react-meta-tags';
import MetaTags from 'react-meta-tags';

const Inspiration = () => {

    const inspiration_desc = "Tierra Décor takes pride in every creation they have made, from the smallest bathrooms to the most grandiose kitchen. In doing so, we have created a repository of photos and designs for our new clients to take a look at and draw inspiration from. Each of these designs has been made by our dedicated team members for our former clients; if you work with us, we will provide the same unparalleled care and attention that we put in our previous pieces of work. Whether you come with your own design already ready or choose to draw inspirations from one of the examples below, we will infuse your personality into every piece of work we create for you."

    const userId = 36672383443;

    // markfod
    useEffect(() => {
        const token =
            'IGQVJWMkpPRW16MmhxVGR5ZA3JjYWduNjk1R2tUUzdwV3hFRzk0VW5kYTU3c0ktU2tsX21icmhGdDlVSHpwc1RLYmVTTmVCaUJWeXo5RWphOXBnbnBNZAEIxcWtvalJfZAHJuRHBfbnh0dlFpMktFcUFmeQZDZD';
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
    });

    return (
        <main id="page" role="main" className="page">
            <ReactTitle title="Inspiration" />
            <MetaTags>
                <title>Inspiration</title>
                <meta name="Inspiration" content={inspiration_desc} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="INSPIRATION — Tierra Decor" />
                <meta property="og:url" content="https://www.tierradecor.com/inspiration" />
                <meta itemProp="name" content="INSPIRATION — Tierra Decor" />
                <meta itemProp="url" content="https://www.tierradecor.com/inspiration" />
            </MetaTags>

            <div className="h1-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    INSPIRATION
                </h1>
            </div>

            <div id="inspiration_desc" className="h1-block">
                <p>{inspiration_desc}</p>
            </div>

            <div id="instafeed"></div>

        </main>
    );
};

export default Inspiration;
