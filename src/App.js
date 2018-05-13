import React from 'react';
import Main from './Main';
import Navigation from './Navigation';
import Footer from './Footer';
import './styles/App.css';

const App = () => (
  <div className="appContainer">
    <div className="leftContent">
      <div className="appMain">
        <Main />
      </div>
      <div className="appFooter">
        <Footer />
      </div>
    </div>
    <div className="appNavigation">
      <Navigation />
    </div>
  </div>
);

export default App;
