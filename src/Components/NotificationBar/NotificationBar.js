import React, { useState, useEffect } from 'react';
import './NotificationBar.scss';

const NotificationBar = () => {
    const state = useState({
        bgColor: '#e6d9cb',
        color: '#fff',
        text: 'Visit our shop',
        link: '',
    })[0];

    useEffect(() => {
        //    fetch notification
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
