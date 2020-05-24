import React from "react";
import "./MeetTheTeam.scss";
import { useStore } from "../../hooks-store/store";
import configureMembersStore from "../../hooks-store/members"

import Grid from "@material-ui/core/Grid";
import SpacingBlock from '../../Utilities/SpacingBlock';
import Bio from "../../Utilities/Bio";

configureMembersStore();

const MeetTheTeam = (props) => {
    const state = useStore()[0];

    const images = require.context('./assets', true);
    const members = state.members.map((member, i) => {
        console.dir(member);
        console.dir("=----");
        return (
            /* <Bio props={member}></Bio> */
            <section className="section-wrapper">
                <Grid key={member.id} item xs={12} spacing={10}>
                    <Grid container item justify="center">
                        <Grid item xs={12} sm={3}>
                            <div className="sqs-block">
                                <div className="member-profile">
                                    <img className="profile" src={images('./' + member.img)} alt={member.alt}></img>
                                </div>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <h1>{member.name}</h1>
                            <p>{member.bio}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        );
    });

    return (
        <main id="page" role="main" className="MeetTheTeam">
            <div className="html-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                > Meet The Team </h1>
            </div>

            {members}
        </main>
    );
};

export default MeetTheTeam;
