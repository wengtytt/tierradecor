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

// import BlogEditor from '../../routes/BlogEditor';
import About from '../About';
import MeetTheTeam from '../MeetTheTeam/MeetTheTeam';
import NotificationBar from '../NotificationBar';
import Inspiration from '../Inspiration';
import BlogPage from '../../routes/BlogPage';

configureNavbarStore();

function App() {
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
                <Route path="/blog/:id" component={BlogPage} exact />

                <Route path="/contact" component={Contact} exact />
                {/* <Route path="/editor" component={BlogEditor} exact /> */}
            </div>
            <Footer />
        </main>
    );
}

export default App;
