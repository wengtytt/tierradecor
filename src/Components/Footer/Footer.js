import React from 'react';
import './Footer.scss';

const Footer = (props) => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer-inner">
                <div className="nav-wrapper back-to-top-nav">
                    <nav>
                        <div className="back-to-top">
                            <a href="#Header">Back To Top</a>
                        </div>
                    </nav>
                </div>
                {/* <div class="html-block">
                    <div className="social-list">
                        
                    </div>
                </div> */}
                <div className="html-block">
                    <p style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                        26-100 Trainyards Drive, Ottawa, ON K1G 3S2<br></br>©
                        2020 Leclair Decor Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
