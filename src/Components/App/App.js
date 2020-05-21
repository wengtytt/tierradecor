import React from 'react';
// import { Route } from 'react-router-dom';
import './App.scss';
// import NotificationBar from '../NotificationBar';
import MobileNav from '../MobileNav';
import Header from '../Header';
// import Home from '../../routes/Home';
import configureNavbarStore from '../../hooks-store/navbar';

configureNavbarStore();

function App() {
    return (
        <main className="App">
            <MobileNav></MobileNav>
            <Header />
            {/* <Route path="/" component={Home} exact /> */}
            {/* <Route path="/projects" component={Projects} /> */}
        </main>
    );
}

export default App;
