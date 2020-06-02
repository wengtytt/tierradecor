import React from 'react';
import './MeetTheTeam.scss';
import { useStore } from '../../hooks-store/store';
import configureMembersStore from '../../hooks-store/members';

import Grid from '@material-ui/core/Grid';
// import Bio from "../../Utilities/Bio";

configureMembersStore();

const MeetTheTeam = (props) => {
    const state = useStore()[0];

    const images = require.context('./assets', true);

    const funders_1 = "Tierra Décor was founded by design enthusiasts, [insert names], who have spent their entire life in pursuit of innovation and radical creation. Having worked in the kitchen and bath industry for a long time, they have built a repertoire of skills and talents before they were ready to move onto newer, more creative ventures. Using the insight they acquired from the residential and commercial design, [names] founded Tierra Décor in an effort to revitalize the creativity of the design industry."
    const funders_2 = "Today, they continue to lead Tierra Décor to be industry trendsetters and innovators. With their cutting-edge approach towards bathroom and kitchen renovation, our founders utilize their masterful craftsmanship to design and implement stunning displays. Each design and material is personally tested and approved by themselves, furthering their passion for the industry."
    const funders_3 = "Our founders are excited to see what comes next in their design journey after a lifetime creating dynamic and vibrant layouts."

    const team_1 = "At Tierra Décor, we have handpicked a team of expert designers, artists, and visionaries to assist our clients in their design journey. Each of our team members holds a true passion for their work and will strive to provide outstanding customer service each step of the way."
    const team_2 = "Our team members are all trailblazers and seasoned professionals and have dedicated their much of their professional lives towards perfecting their art. They are more than ecstatic to work with you and bring the essence of your design to life. Any questions or concerns? Feel free to reach out to us, and we will get back to you right away."

    return (
        <main id="page" role="main" className="MeetTheTeam">
            <div className="bio-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {' '}
                    Meet The Team{' '}
                </h1>
            </div>
            <section className="section-wrapper">
                <Grid item xs={12}>
                    <Grid container item justify="center">
                        <Grid item xs={12} sm={12}>
                            <img
                                src={images('./team.jpeg')}
                                alt="team"
                            ></img>
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
            </section>


        </main>
    );
};

export default MeetTheTeam;
