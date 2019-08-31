import React, { Component } from 'react';
import './stylesheets/Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div>
        <footer>
        <ul className="footer-menu">
                <li className="contact">
                <a href="#contact"><i className="far fa-address-book footer-icon"></i>
                <p>Contact</p></a>
                </li>
                <li className="github">
                <a
                  href="https://github.com/yem82"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-github footer-icon"></i>
                    <p>GitHub</p>
                  </a>
                </li>
                <li className="linkedin">
                <a
                  href="https://www.linkedin.com/in/yadebayo/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-linkedin footer-icon"></i>
                  <p>LinkedIn</p></a>
                </li>
              </ul>
              <hr />
              <p className="c-name">©Yemi Adebayo 2019</p>
        </footer>
      </div>
    )
  }
}

export default Footer;