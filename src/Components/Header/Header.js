import React from 'react';
import './Header.scss';
import { useStore } from '../../hooks-store/store';
import { NavLink } from 'react-router-dom';
import Logo from './assets/logo.png';

const Header = (props) => {
    const state = useStore()[0];

    const navList = state.navs.map((item, i) => {
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

    return (
        <header id="Header" role="banner">
            <div className="header-inner">
                <div id="logoWrapper" className="title-logo-wrapper">
                    <h1 id="logoImage" className="logo-image">
                        <a href="/">
                            <img src={Logo} alt="Tierra Decor" />
                        </a>
                    </h1>
                </div>
                <label
                    htmlFor="MobileNavToggle"
                    className="mobile-nav-toggle-label show-on-scroll-mobile"
                >
                    <div className="top-bar"></div>
                    <div className="middle-bar"></div>
                    <div className="bottom-bar"></div>
                </label>
                <div id="headerNav">
                    <div id="mainNavWrapper" className="nav-wrapper">
                        <nav id="mainNavigation">{navList}</nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
