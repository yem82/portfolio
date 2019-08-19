import React, { Component } from 'react';
import './Form.scss';
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
        <form onSubmit={this.handleSubmit} className="form">
          <h2>Contact:</h2>
          <br/>
          <div className="row">
          <div className="col">
          <div className="form-group">
            <label> First name:</label>
            <input
            value={this.state.firstname}
            type="text"
            className="form-control"
            name="firstname"
            onChange={this.handleChange}/>
          </div>
          </div>

          <div className="col">
          <div className="form-group">
            <label> Last name:</label>
            <input
            value={this.state.lastname}
            type="text"
            className="form-control"
            name="lastname"
            onChange={this.handleChange}/>
          </div>
          </div>
          </div>

          <div className="form-group">
            <label> Email:</label>
            <input
              value={this.state.email}
              type="text"
              className="form-control"
              name="email"
              onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label> Subject:</label>
            <input
            value={this.state.subject}
            type="text"
            className="form-control"
            name="subject"
            onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label> Message:</label>
            <textarea
            value={this.state.message}
            className="form-control"
            name="message"
            onChange={this.handleChange}/>
          </div>

        <button className="btn btn-dark" type="submit">Submit</button>
        <div id="error" className="errorMessage">
          <br/>
        {errors.map(error => (
          <p key={error}>* {error}</p>
        ))}
        </div>
        </form>
      </div>
    );
  }
}

export default Form;