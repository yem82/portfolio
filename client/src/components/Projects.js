import React, { Component } from 'react';
import Spacebook from '../assets/videos/spacebook.mp4';
import Woke from '../assets/videos/woke.mp4';
import Notes from '../assets/videos/notes.mp4';
import Work from '../assets/images/ideas.svg'
import './stylesheets/Projects.scss';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div>
        <h3 id="projects" className="title projects-title">
        Projects:</h3>
        <div className="row projects-row">
        <div className="card card-a">
        <h3>Spacebook</h3>
        <hr className="spacebook-hr"/>
        <div className="column column-a">
        <video
            className="sb-video"
            loop="true"
            controls="controls"
            muted
            >
            <source src={Spacebook}
            type="video/mp4"/>
            video not supported.
           </video>
          <div>
          <div className="spacebook-brief">
           Spacebook is a social media app built using <b>Ruby on Rails, HTML</b> and <b>SCSS</b>.
          </div>
          <div className="sb-buttons">
        <div className="spacebook-github">
            <a
              href="https://github.com/yem82/acebook-spacebook"
              target="_blank"
              rel="noopener noreferrer">
              <p>GitHub</p>
            </a>
          </div>
          <div className="spacebook-website">
            <a
              href="https://acebook-spacebook.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer">
              <p>Website</p>
            </a>
            </div>
            </div>
          </div>
          </div>
          </div>


       <div className="card card-b">
          <h3>Woke App</h3>
          <hr className="woke-hr"/>
          <div className="column column-b">
          <video
            className="woke-video"
            loop="true"
            controls="controls"
            muted
            >
            <source src={Woke}
            type="video/mp4"/>
            video not supported.
           </video>
           <div >
           <div className="woke-brief">
           A hands-free mobile trivia app created to keep drivers awake at the wheel (especially for longer journeys) - built using <b>Java, Android Studio</b> and <b>Dialogflow API</b>.
          </div>
          <div className="woke-github">
            <a
              href="https://github.com/yem82/woke-platypus"
              target="_blank"
              rel="noopener noreferrer">
              <p>GitHub</p>
            </a>
          </div>
          </div>
          </div>
          </div>

        <div className="card card-c">
          <h3>Notes App</h3>
          <hr className="notes-hr"/>
          <div className="column column-c">
           <video 
           className="notes-video"
           loop="true" 
           controls="controls"
           muted
           >
            <source src={Notes}
            type="video/mp4"/>
            video not supported.
           </video>
           <div >
           <div className="notes-brief">
           A notes app built using <b>Vanilla JavaScript</b> and a <b>custom testing framework</b>.
          </div>
          <div className="notes-github">
            <a
              href="https://github.com/yem82/notes"
              target="_blank"
              rel="noopener noreferrer">
              <p>GitHub</p>
            </a>
          </div>
          </div>
          </div>
          </div>
          <img className="coding-pic" src={Work} alt="coding pic"></img>
        </div>
      </div>
    )
  }
}

export default Projects;