import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Navigation from './Navigation';
import Footer from './Footer';
import s from './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="appContainer">
        <div className="appMain">
          <Main />
        </div>
        <div className="appNavigation">
          <Navigation />
        </div>
      </div>
      <div className="appFooter">
        <Footer />
      </div>
    </div>
  );
};

export default App;
