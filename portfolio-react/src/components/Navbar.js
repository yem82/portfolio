import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };

  // }

  render() {

    return (
      <div>
        <nav className="navigation">
        <h5 className="full-name">YEMI ADEBAYO</h5>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger"><div></div></div>
          <div className="menu">
            <div>
              <div>
              <ul>
                <li>
                <a href="#about">About Me</a>
                </li>
                <li>
                <a href="#projects">Projects</a>
                </li>
                <li>
                <a href="#contact">Contact</a>
                </li>
                <li>
                <a
                  href="https://www.linkedin.com/in/yadebayo/"
                  target="_blank"
                  rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                <a
                  href="https://github.com/yem82"
                  target="_blank"
                  rel="noopener noreferrer">GitHub</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;