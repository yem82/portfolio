import React, { Component } from 'react';
import './Technologies.scss'

class Technologies extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div>
        <div className="section-bg">
        <h3 className="title">Technologies:</h3>
        <div className="row">
        <div className="card">
          <div className="column">
            <h3>Testing Frameworks</h3>
            <br/>
            <ul>
              <li>
                <p>RSpec</p>
              </li>
              <li>
              <p>Capybara</p>
              </li>
              <li>
              <p>Jasmine</p>
              </li>
              <li>
              <p>Espresso</p>
              </li>
              <li>
              <p>Cypress</p>
              </li>
              <li>
              <p>JUnit</p>
              </li>
            </ul>
            </div>
          </div>

          <div className="card">
          <div className="column">
            <h3>Web Development</h3>
            <br/>
            <ul>
              <li>
              <p>React</p>
              </li>
              <li>
              <p>Node.js</p>
              </li>
              <li>
              <p>Ruby on Rails</p>
              </li>
              <li>
              <p>Sinatra</p>
              </li>
              <li>
              <p>PostgreSQL</p>
              </li>
              <li>
              <p>HTML/CSS</p>
              </li>
              <li>
              <p>Bootstrap</p>
              </li>
            </ul>
          </div>
          </div>

          <div className="card">
          <div className="column">
            <h3>Mobile Development</h3>
            <br/>
            <ul>
              <li>
              <p>Java</p>
              </li>
              <li>
              <p>Android Studio</p>
              </li>
            </ul>
            </div>
          </div>
        </div>
     </div>
     </div>
    )
  }
}

export default Technologies;