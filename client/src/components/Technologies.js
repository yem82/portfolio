import React, { Component } from 'react';
import './stylesheets/Technologies.scss'
import Planner from '../assets/images/checklist.svg'

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
        <div className="card card-i">
          <div className="column column-i">
            <h3>Testing Frameworks</h3>
            <hr/>
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
              <p>Jest</p>
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

          <div className="card card-ii">
          <div className="column column-ii">
            <h3>Development Tools</h3>
            <hr/>
            <br/>
            <ul>
              <li>
              <p>React.js</p>
              </li>
              <li>
              <p>JavaScript</p>
              </li>
              <li>
              <p>Node.js</p>
              </li>
              <li>
              <p>Ruby on Rails</p>
              </li>
              <li>
              <p>PostgreSQL</p>
              </li>
              <li>
              <p>MongoDB</p>
              </li>
              <li>
              <p>Mongoose</p>
              </li>
              <li>
              <p>HTML/CSS</p>
              </li>
              <li>
              <p>Android Studio</p>
              </li>
            </ul>
            <img className="planner-pic" src={Planner} alt="planner pic"></img>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Technologies;