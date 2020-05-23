import React from 'react';
import './Contact.scss';
import Grid from '@material-ui/core/Grid';

const Contact = () => {
    return (
        <main id="page" role="main" className="page">
            <div className="html-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    CONTACT
                </h1>
                <p
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    General Inquiries |{' '}
                    <a href="mailto:hello@leclairdecor.com">
                        hello@leclairdecor.com{' '}
                    </a>{' '}
                    Marketing and Collaboration Inquiries |{' '}
                    <a href="mailto:sacha@leclairdecor.com">
                        sacha@leclairdecor.com
                    </a>
                </p>
            </div>
        </main>
    );
};

export default Contact;
