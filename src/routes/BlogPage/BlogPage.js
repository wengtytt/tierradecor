import React, { useState, useEffect } from 'react';
import './BlogPage.scss';

import BlogContent from '../BlogContent';
import { blog } from '../../services';

import img_1 from './assets/img_1.jpeg';

const BlogPage = (props) => {

    const [info, setInfo] = useState({
        id: '',
        title: '',
        des: '',
        date: '',
        cover: [],
        alt: '',
        enabled: false,
        data: [],
        profile: true,
        editing: true,
        loaded: false,
    });

    useEffect(() => {
        const id = props.match.params.id;

        if (!info.loaded) {
            blog.getInfo(id).then((response) => {
                if (response.data) {
                    setInfo({
                        ...info,
                        id: id, //response.data.id,
                        loaded: true,
                        data: response
                    });
                }
            });
        }
    }, [info, props.match.params.id]);

    const blogs = [
        {
            id: 1,
            type: "text",
            value: "<p>We are hiring again!</p>"
        },
        {
            id: 2,
            type: "text",
            value: "<p>This time, we are looking for a super organized + detail oriented designer (slash AutoCAD wizard) to join our team as a Design Technician, a new role for us with a dedicated focus on the creation of amazingly detailed, professional, and organized design drawings & documents. This role will report directly to our design manager and CEO/founder, Melissa Leclair, and work closely with our project leads to assemble everything needed to execute scroll-stopping projects. This is a DETAILS job, and is perfect for someone who loves the technical side of interior design, working collaboratively, and getting + keeping large amounts of information as organized as possible. We know you’re out there, spreadsheet enthusiasts!</p>"
        },
        {
            id: 3,
            type: "text",
            value: "<p>If this sounds like you, please have a look at the job posting below and then get in touch! </p>"
        },
        {
            id: 4,
            type: "img",
            value: "img_1"
        },
        {
            id: 5,
            type: "text",
            value: "<h2>The Company</h2><p>Leclair Decor is an Ottawa-based residential design firm with a principle focus on large scale custom remodels and new builds across North America. Our design team works collaboratively to conceptualize elevated designs, oversee construction, and fully install & style our projects.</p> <h2>The Position: Design Technician</h2> <p>The chosen candidate will be responsible for the production of critical design documents including as-built plans, detailed technical demolition/construction plans, lighting & plumbing plans, millwork elevations, custom furniture drawings, exterior elevations, 2D and/or 3D mockups and renderings, and detailed specification sheets. The person selected for this role will work closely with our project leads to finalize executional design packages which are provided to general contractors and various trades at the outset of construction projects. This is primarily an office based, back-end role with a heavy concentration of computer-based work. </p>"
        },
        {
            id: 6,
            type: "text",
            value: "<ul> <li>Attend and assist with preliminary and incidental site visits to gather accurate measurements and photos</li> <li>Prepare as-built drawings to be used by project leads during design phase </li><li>Prepare, revise, and finalize all technical design documents, including (but not limited to) demo/construction plans, lighting & plumbing plans, custom cabinetry elevations, custom furniture drawings, exterior elevations, 2D and/or 3D mockups, etc.</li> </ul> "
        }
    ]

    const markup = blogs.map((item) => {
        switch (item.type) {
            case 'text':
                return <div dangerouslySetInnerHTML={{ __html: item.value }}></div>;
            case 'img':
                return <div className="img_full"><img src={img_1} alt="" /></div>;
            case 'gallery':
                return <div>{item.value}</div>;
            default:
                return null;
        }
    });

    return (
        <main id="page" role="main" className="blog-page">
            <section className="section-wrapper">
                <div className="h1-block">
                    <div className="summary-date">May 26, 2020</div>
                    <h1 className="text-center">We're Hiring: Design Technician</h1>
                </div>
            </section>
            <section className="section-wrapper">
                <BlogContent {...info}></BlogContent>;
            </section>
        </main>
    );
};

export default BlogPage;
