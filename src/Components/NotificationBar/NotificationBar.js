import React, { useState, useEffect } from 'react';
import './NotificationBar.scss';
import api from '../../api.js';

const NotificationBar = () => {
    const [state, setPromotion] = useState({
        bgColor: '#e6d9cb',
        color: '#fff',
        text: 'Visit our shop',
        link: '',
    });

    useEffect(() => {
        api.get(`/promotion`).then((response) => {
            if (response.data) {
                setPromotion(response.data);
            }
        });
        return () => {};
    }, []);

    return (
        <div
            className="NotificationBar"
            style={{ backgroundColor: state.bgColor }}
        >
            <a href={state.link} style={{ color: state.color }}>
                {state.text}
            </a>
            <span
                className="notification-close"
                onClick={(e) => {
                    const bar = e.target.parentNode;
                    bar.parentNode.removeChild(bar);
                }}
            ></span>
        </div>
    );
};

export default NotificationBar;
