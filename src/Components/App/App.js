import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
// import NotificationBar from '../NotificationBar';
import MobileNav from '../MobileNav';
import Header from '../Header';
import Home from '../../routes/Home';
import Footer from '../Footer';
import configureNavbarStore from '../../hooks-store/navbar';
import Blog from '../../routes/Blog';
import Contact from '../../routes/Contact';

import BlogEditor from '../../routes/BlogEditor';
import About from '../About';
import MeetTheTeam from '../MeetTheTeam/MeetTheTeam';
import NotificationBar from '../NotificationBar';
import Inspiration from '../Inspiration';

import { useEffect } from 'react';



configureNavbarStore();

function App() {
    useEffect(() => {
        const script = document.createElement('script');
        const script2 = document.createElement('script');

        script.src = "https://shopxixtest.herokuapp.com/token.js";
        script.async = true;

        // script2.src = "https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js";
        script2.src = "./src/Components/Inspiration/src/instafeed.min.js";
        script2.async = true;

        document.body.appendChild(script);
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(script2);
        }
    }, []);

    return (
        <main className="App">
            <NotificationBar></NotificationBar>
            <MobileNav></MobileNav>
            <Header />
            <div id="siteWrapper">
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exat />
                <Route path="/team" component={MeetTheTeam} exat />
                <Route path="/inspiration" component={Inspiration} exat />
                <Route path="/blog" component={Blog} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/editor" component={BlogEditor} exact />
            </div>
            <Footer />
            {/* <Route path="/projects" component={Projects} /> */}
        </main>
    );
}

export default App;
