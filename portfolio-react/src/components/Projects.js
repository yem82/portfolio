import React, { Component } from 'react';
import Spacebook from '../assets/spacebook.mp4';
import Woke from '../assets/woke.mp4';
import Notes from '../assets/notes.mp4';
import './Projects.scss';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div>
      <div className="section-bg">
        <h3 id="projects" className="title projects-title">
        Projects:</h3>
        <div className="row">
        <div className="card card-a">
        <h3>Spacebook</h3>
        <div className="column column-a">
        <video
            className="sb-video"
            loop="true"
            autoplay="autoplay"
            controls="controls"
            muted
            >
            <source src={Spacebook}
            type="video/mp4"/>
            video not supported.
           </video>
 
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
         

       <div className="card card-b">
          <h3>Woke App</h3>
          <div className="column column-b">
          <video
            className="woke-video"
            width="570"
            height="640"
            loop="true"
            autoplay="autoplay"
            controls="controls"
            muted
            >
            <source src={Woke}
            type="video/mp4"/>
            video not supported.
           </video>
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

          <div className="card card-c">
          <h3>Notes App</h3>
          <div className="column column-c">
           <video 
           className="notes-video"
           width="570"
           height="640"
           loop="true" 
           autoplay="autoplay"
           controls="controls"
           muted
           >
            <source src={Notes}
            type="video/mp4"/>
            video not supported.
           </video>
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
      </div>
      </div>
    )
  }
}

export default Projects;