import React from 'react';
import HeartIcon from 'react-icons/lib/fa/heart';
import selfie from './images/selfie.png';
import './styles/PageContent.css';


const Home = () => (
  <div className="contentContainer">
    <h2 className="title">Hi, I&apos;m Bryan!</h2>
    <h4 className="subtitle">A real life human!</h4>
    <ul className="aboutMeList">
      <li>
        I am a graphic designer turned software developer with
        a passion for teaching
      </li>
      <li>
        I am primarily a Javascript developer who has a love affair
        with Rust
      </li>
      <li>I <HeartIcon size={22} style={{ color: '#FF4136' }} /> React</li>
      <li>I believe knowledge should be free and accessible to everyone</li>
      <li>Minimalism is cool</li>
      <li>
        I&apos;m bad at making lists about myself
      </li>
    </ul>
    <div className="photoContainer">
      <img src={selfie} alt="Me" className="photo" />
    </div>
  </div>
);


export default Home;
