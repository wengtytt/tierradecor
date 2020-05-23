import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
// import NotificationBar from '../NotificationBar';
import MobileNav from '../MobileNav';
import Header from '../Header';
import Home from '../../routes/Home';
import Footer from '../Footer';
import configureNavbarStore from '../../hooks-store/navbar';
import Blog from '../../routes/Blog';
import Contact from '../../routes/Contact';

import BlogEditor from "../../routes/BlogEditor";
import About from "../About";

configureNavbarStore();

function App() {
  return (
    <main className="App">
      <MobileNav></MobileNav>
      <Header />
      <div id="siteWrapper">
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exat />
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
