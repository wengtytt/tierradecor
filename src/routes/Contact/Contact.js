import React, { useState, useEffect, useRef } from 'react';
import './Contact.scss';
import '../../Utilities/SpacingBlock';
import Grid from '@material-ui/core/Grid';
import SpacingBlock from '../../Utilities/SpacingBlock';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CircularProgress from '@material-ui/core/CircularProgress';
import { subscription } from '../../services';

const Contact = () => {
    useEffect(() => {
        window.dispatchEvent(new CustomEvent('scroll'));
    }, []);

    const [formInfo, setFormInfo] = useState({
        name: '',
        email: '',
        msg: '',
        submitting: false,
        subscribed: false,
    });

    const ref = useRef('form');

    const handleChange = (e, name) => {
        formInfo[name] = e.target.value;

        setFormInfo({ ...formInfo, ...{ subscribed: false } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormInfo({ ...formInfo, ...{ submitting: true } });
        subscription.subscribe(formInfo.name, formInfo.email, formInfo.msg)
            .then(response => {
                setFormInfo({ ...formInfo, ...{ submitting: false, subscribed: true } });
            })
            .catch(error => {
                console.log(error);
                setFormInfo({ ...formInfo, ...{ submitting: false } });
            })
        return false;
    };

    return (
        <main id="page" role="main" className="page contact">
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
                    <a href="mailto:sales@tierradecor.com">
                        sales@tierradecor.com{' '}
                    </a>{' '}
                    Address |{' '}
                    <span className="color-theme">
                        50 Colonnade Rd B200, Nepean, ON K2E 7J6 </span>
                </p>
            </div>
            <SpacingBlock></SpacingBlock>
            <div className="html-block">
                <h1
                    style={{
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    NEWSLETTER
                </h1>
                <Grid container justify="center">
                    <Grid item xs={false} sm={2}></Grid>
                    <Grid item xs={12} sm={8} className="blog-title">
                        <p
                            style={{
                                textAlign: 'center',
                                whiteSpace: 'pre-wrap',
                                letterSpacing: '.8px',
                            }}
                        >
                            Sign up for our newsletter to receive news and
                            updates on everything Leclair Decor! You’ll be the
                            first to hear about our sales at LD shoppe and
                            you’ll get all the intel on our latest projects and
                            blog posts.
                        </p>
                    </Grid>
                    <Grid item xs={false} sm={2}></Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={false} sm={2}></Grid>
                    <Grid item xs={12} sm={8} className="blog-title">
                        <ValidatorForm ref={ref} onSubmit={handleSubmit}>
                            <TextValidator
                                required
                                variant="outlined"
                                id="Name"
                                label="Name"
                                onChange={(e) => {
                                    handleChange(e, 'name');
                                }}
                                value={formInfo.name}
                                validators={['required']}
                                errorMessages={[
                                    'This field is required',
                                ]}
                            />
                            <TextValidator
                                required
                                type="email"
                                variant="outlined"
                                id="email"
                                label="Email"
                                onChange={(e) => {
                                    handleChange(e, 'email');
                                }}
                                value={formInfo.email}
                                validators={['required', 'isEmail']}
                                errorMessages={[
                                    'This field is required',
                                    'Email address is not valid',
                                ]}
                            />
                            <TextField
                                variant="outlined"
                                id="msg"
                                label="Message"
                                multiline
                                rows={10}
                                value={formInfo.msg}
                                onChange={(e) => {
                                    handleChange(e, 'msg');
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={formInfo.submitting || formInfo.subscribed ? true : false}
                            >
                                {formInfo.submitting || formInfo.subscribed ? (formInfo.submitting ? <CircularProgress color="secondary" /> : 'Sent') : 'Submit'}
                            </Button>
                        </ValidatorForm>
                    </Grid>
                    <Grid item xs={false} sm={2}></Grid>
                </Grid>
            </div>
        </main>
    );
};

export default Contact;
