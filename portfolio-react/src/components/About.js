import React, { Component } from 'react';
import './stylesheets/About.scss'
import Profile from '../assets/images/profile.png'
import AboutMe from  '../assets/images/aboutme.svg'
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div className="grid">
        <div className="section-a">
        <div className="profile-frame">
        <img className="profile-pic" src={Profile} alt="profile pic"></img>
        </div>
        </div>
        <div className="section-b">
        <div className="brief"><p> <b>Hi, My name is Yemi!</b> I am a full-stack software engineer.</p>
        <p>I enjoy learning new technologies and developing software that enables us to learn, grow and thrive.</p>
        <div className="scroll-indicator">
          <span></span>
          <span></span>
        </div>
        </div>
        </div>

        <div id="about" className="section-c"><h3>About:</h3>
          <p>I am a London-based software developer with a creative yet practical approach to problem solving. I recently graudated from 
            <a 
              href="https://makers.tech/"
              target="_blank"
              rel="noopener noreferrer"> Makers Academy</a> (a full-stack web development bootcamp), where I learnt how to use best coding practices and agile methodologies to build web applications.
              I'm excited about learning new technologies that will help build our future!</p>

              <p>Looking to get in touch? <b>Drop me a note<a href="#contact"> here!</a></b></p>
              <img className="about-pic" src={AboutMe} alt="about pic"></img>
        </div>
        </div>
    )
  }
}

export default About;