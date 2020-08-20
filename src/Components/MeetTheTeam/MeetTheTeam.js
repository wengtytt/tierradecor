import React from 'react';
import './MeetTheTeam.scss';
// import { useStore } from '../../hooks-store/store';

import Grid from '@material-ui/core/Grid';

import { ReactTitle } from 'react-meta-tags';
import MetaTags from 'react-meta-tags';

const MeetTheTeam = (props) => {
    const images = require.context('./assets', true);

    const funders_1 =
        'Tierra Décor was founded by design enthusiasts, [insert names], who have spent their entire life in pursuit of innovation and radical creation. Having worked in the kitchen and bath industry for a long time, they have built a repertoire of skills and talents before they were ready to move onto newer, more creative ventures. Using the insight they acquired from the residential and commercial design, [names] founded Tierra Décor in an effort to revitalize the creativity of the design industry.';
    const funders_2 =
        'Today, they continue to lead Tierra Décor to be industry trendsetters and innovators. With their cutting-edge approach towards bathroom and kitchen renovation, our founders utilize their masterful craftsmanship to design and implement stunning displays. Each design and material is personally tested and approved by themselves, furthering their passion for the industry.';
    const funders_3 =
        'Our founders are excited to see what comes next in their design journey after a lifetime creating dynamic and vibrant layouts.';

    const team_1 =
        'At Tierra Décor, we have handpicked a team of expert designers, artists, and visionaries to assist our clients in their design journey. Each of our team members holds a true passion for their work and will strive to provide outstanding customer service each step of the way.';
    const team_2 =
        'Our team members are all trailblazers and seasoned professionals and have dedicated their much of their professional lives towards perfecting their art. They are more than ecstatic to work with you and bring the essence of your design to life. Any questions or concerns? Feel free to reach out to us, and we will get back to you right away.';

    const our_mission =
        'Make awe-inspiring kitchen and bathroom products that enlighten your senses.';

    const our_vision_1 =
        'We envision a world of design that isn’t afraid to move forward and slow down at the same time.';
    const our_vision_2 =
        'Rather than staying stuck on tradition or speeding through fast fads, we see a world that values individuality and harmony — a world that is fully able to blend the old with the new and do it seamlessly.';
    const our_vision_3 =
        'We have been working in the design industry for [number] years now, and we’ve never left a single customer unhappy.';

    const meta_meetTheTeam =
        funders_1 +
        funders_2 +
        funders_3 +
        team_1 +
        team_2 +
        our_mission +
        our_vision_1 +
        our_vision_2 +
        our_vision_3;

    return (
        <main id="page" role="main" className="MeetTheTeam">
            <ReactTitle title="Meet The Team" />
            <MetaTags>
                <title>Meet The Team</title>
                <meta name="About" content={meta_meetTheTeam} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="team — Tierra Decor" />
                <meta
                    property="og:url"
                    content="https://www.tierradecor.com/team"
                />
                <meta itemProp="name" content="team — Tierra Decor" />
                <meta
                    itemProp="url"
                    content="https://www.tierradecor.com/team"
                />
            </MetaTags>
            <div className="h1-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    MEET THE TEAM
                </h1>
            </div>
            <section className="section-wrapper">
                <Grid item xs={12}>
                    <Grid container item justify="center">
                        <Grid item xs={12} sm={12}>
                            <img src={images('./meettheteam.jpg')} alt="team"></img>
                        </Grid>
                    </Grid>
                </Grid>
                <div className="content-inner">
                    <h2>Funders</h2>
                    <p>{funders_1}</p>
                    <p>{funders_2}</p>
                    <p>{funders_3}</p>
                </div>
                <div className="content-inner">
                    <h2>Team</h2>
                    <p>{team_1}</p>
                    <p>{team_2}</p>
                </div>
                <div className="content-inner">
                    <h2>Our Mission</h2>
                    <p>{our_mission}</p>
                </div>
                <div className="content-inner">
                    <h2>Our Vision</h2>
                    <p>{our_vision_1}</p>
                    <p>{our_vision_2}</p>
                    <p>{our_vision_3}</p>
                </div>
            </section>
        </main>
    );
};

export default MeetTheTeam;
