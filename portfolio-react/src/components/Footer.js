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
                <a href="#contact"><i className="far fa-address-book icon"></i>
                <p>Contact</p></a>
                </li>
                <li className="github">
                <a
                  href="https://github.com/yem82"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-github icon"></i>
                    <p>GitHub</p>
                  </a>
                </li>
                <li className="linkedin">
                <a
                  href="https://www.linkedin.com/in/yadebayo/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-linkedin icon"></i>
                  <p>LinkedIn</p></a>
                </li>
              </ul>
              <hr />
              <p>©Yemi Adebayo 2019</p>
        </footer>
      </div>
    )
  }
}

export default Footer;