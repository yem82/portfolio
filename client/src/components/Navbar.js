import React, { Component } from 'react';
import './stylesheets/Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render() {
    return (
      <div>
        <nav className="navigation">
        <div><h6 className="full-name">YEMI ADEBAYO</h6></div>
          <ul className="menu">
            <li className="About">
            <a href="#about">
            <i className="fas fa-id-card icon"></i>
            <p>About Me</p></a>
            </li>
            <li>
            <a href="#projects">
            <i className="fas fa-project-diagram icon"></i>
            <p>Projects</p></a>
            </li>
            <li>
            <a href="#contact"><i className="far fa-address-book icon"></i>
            <p>Contact</p></a>
            </li>
            <li>
            <a
              href="https://github.com/yem82"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-github icon"></i>
                <p>GitHub</p>
              </a>
            </li>
            <li className="linkedin-nav">
            <a
              href="https://www.linkedin.com/in/yadebayo/"
              target="_blank"
              rel="noopener noreferrer">
            
              <i className="fab fa-linkedin icon"></i>
              <p>LinkedIn</p></a>
            </li>
          </ul>
        </nav>
      </div>
    )
}

};
export default Navbar;