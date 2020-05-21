import React, { useState, useEffect, useRef } from 'react';
import './MobileNav.scss';
import { useStore } from '../../hooks-store/store';
import { NavLink } from 'react-router-dom';

const MobileNav = (props) => {
    const state = useStore()[0];

    const [mobNav, setMobNav] = useState(false);

    const mainRef = useRef(0);
    const [shouldShowHeader, setShouldShowHeader] = useState(false);
    const OFFSET = 400;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (typeof window !== 'undefined' && mainRef.current) {
                const showHeader = mainRef.current > OFFSET;
                if (showHeader !== shouldShowHeader) {
                    setShouldShowHeader(showHeader);
                }
            }

            mainRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        if (mobNav) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [shouldShowHeader, mobNav]);

    const mobileList = state.navs.map((item, i) => {
        if (item.path === '/') {
            return (
                <div key={i} className="index">
                    <NavLink to={item.path} exact>
                        {item.label}
                    </NavLink>
                </div>
            );
        }

        let className = item.external ? 'external' : 'collection';

        return (
            <div key={i} className={className}>
                <NavLink to={item.path}>{item.label}</NavLink>
            </div>
        );
    });

    const toggleChange = () => {
        setMobNav(!mobNav);
    };

    const scrollClass = shouldShowHeader
        ? 'show-on-scroll-wrapper show'
        : 'show-on-scroll-wrapper';
    return (
        <React.Fragment>
            <input
                type="checkbox"
                name="mobile-nav-toggle"
                id="MobileNavToggle"
                className="mobile-nav-toggle-box hidden"
                checked={mobNav}
                onChange={toggleChange}
            ></input>
            <div className={scrollClass} id="showOnScrollWrapper">
                <label
                    htmlFor="MobileNavToggle"
                    className="mobile-nav-toggle-label show-on-scroll-mobile"
                >
                    <div className="top-bar"></div>
                    <div className="middle-bar"></div>
                    <div className="bottom-bar"></div>
                </label>
            </div>
            <div id="OverlayNav">
                <div id="MobileNavWrapper" className="nav-wrapper">
                    <nav id="MobileNavigation">{mobileList}</nav>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MobileNav;
