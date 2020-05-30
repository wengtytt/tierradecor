import React, { useState, useEffect } from 'react';
import './NotificationBar.scss';
import { announcement } from '../../services';

const NotificationBar = () => {
    console.log("aaa");
    const [state, setPromotion] = useState();

    useEffect(() => {
        announcement.get()
            .then((response) => {
                setPromotion(response.data.json_data);
            })
            .catch(error => {
                console.log(error);
            });
        return () => { };
    }, []);

    return (
        <div>
            {state ? (
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
                ) : ''}
        </div>
    );
};

export default NotificationBar;
