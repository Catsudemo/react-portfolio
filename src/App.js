import React from 'react';
import './App.css';
import About from './Components/About';
import Work from './Components/Work';
import Education from './Components/Education';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import { myWork, myDetails } from './me.js';

let addresses = {
  header: "document.getElementById('header')",
  about: "document.getElementById('about')",
  work: "document.getElementById('work')",
  contact: "document.getElementById('contact-me')",
};

function App() {
  return (
    <div className="App">
      <div className="App">
        <Navbar data={addresses} id="navbar"></Navbar>

        <div className="Header-banner" id="header">
          <Header data={myDetails}> </Header>
        </div>

        <About data={myDetails} id="about" />

        <br></br>

        <Work data={myWork} id="work" />

        <br></br>
        <Education data={myDetails} id="education" />

        <br></br>

        <Contact data={myDetails} id="contact-me" />

        <br></br>
      </div>
    </div>
  );
}

export default App;
