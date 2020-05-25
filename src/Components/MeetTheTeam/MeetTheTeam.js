import React from "react";
import "./MeetTheTeam.scss";
import { useStore } from "../../hooks-store/store";
import configureMembersStore from "../../hooks-store/members"

import Grid from "@material-ui/core/Grid";
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
            <Grid key={member.id} item xs={12}>
                <Grid container item justify="center">
                    <Grid item xs={12} sm={3}>
                        <div className="bio-block">
                            <div className="bio-profile">
                                <img src={images('./' + member.img)} alt={member.alt}></img>
                            </div>

                        </div>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <div className="bio-block bio-left-space">
                            <h1>{member.name}</h1>
                            <p>{member.bio}</p>
                        </div>

                    </Grid>
                </Grid>
            </Grid>
        );
    });

    return (
        <main id="page" role="main" className="MeetTheTeam">
            <div className="bio-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                > Meet The Team </h1>
            </div>

            <section className="section-wrapper">
                {members}
            </section>
        </main>

    );
};

export default MeetTheTeam;
