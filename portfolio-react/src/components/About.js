import React, { Component } from 'react';
import './About.scss'
import Profile from './profile.png'
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
        <div className="brief"><p> Hi! My name is Yemi and I am a full-stack software engineer.</p>
        <p>I am passionate about learning and developing software that improves productivity.</p>
        </div>
        </div>

        <div id="about" className="section-c"><h3>About:</h3>
          <p>I am a London-based software developer with a creative yet practical approach to problem solving. I recently graudated from Makers Academy (a full-stack web development bootcamp), where I learnt how to use best coding practices and agile methodologies to build web applications.
              I'm excited about learning new technologies that will help build our future!</p>

              <p><b>Looking to get in touch? Drop me a note below!</b></p>
        </div>
        </div>
    )
  }
}

export default About;