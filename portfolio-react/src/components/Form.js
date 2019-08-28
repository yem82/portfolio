import React, { Component } from 'react';
import './stylesheets/Form.scss';
import axios from 'axios';

function validate(firstname, lastname, email, message) {
  const errors = [];

  if (firstname === '' || lastname === '') {
    errors.push("name fields can't be empty!");
  }

  if (email === '') {
    errors.push("email can't be empty!");
  }
  if (email.split("").filter(x => x === "@").length !== 1 || email.indexOf(".") === -1) {
    errors.push("email should contain '@' and at least one dot");
  }

  if (message === '') {
    errors.push("message can't be empty!");
  }

  return errors;
}
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
      errors: []
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { firstname, lastname, email, subject, message } = this.state;

    const errors = validate(firstname, lastname, email, message);
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      } else {
        this.setState({ errors: [] });
        setTimeout(function(){
          alert('message sent!');
          }, 2000);
      }

    const form = await axios.post('/express', {
      firstname,
      lastname,
      email,
      subject,
      message
    })
  };

render() {
    const { errors } = this.state
    return (
      <div>
          <div className="title contact-title">
          Contact:
          </div>
          <form onSubmit={this.handleSubmit} className="form" id="contact">
    
          <div className="row form-row">
          
          <p className="required">* required</p>
            <br/>
          
          <div>
            <label className="first-name">*First name</label>
            <input
            className="form-text"
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}/>
          </div>

          
          <div>
            <label className="last-name">*Last name</label>
            <input
            className="form-text"
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}/>
          </div>

          
          <div>
            <label className="email">*Email</label>
            <input
              className="form-text"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}/>
          </div>

          
          <div>
            <label className="subject">Subject</label>
            <input
            className="form-text"
            type="text"
            name="subject"
            value={this.state.subject}
            onChange={this.handleChange}/>
          </div>

          <div>
            <label className="message">*Message</label>
            <textarea
            className="form-text"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}/>
          </div>
    
        <button type="submit">Submit</button>
        <div id="error" className="errorMessage">
          <br/>
        {errors.map(error => (
          <p key={error}>* {error}</p>
        ))}
        </div>
        </div>
        </form>
      </div>
    );
  }
}

export default Form;