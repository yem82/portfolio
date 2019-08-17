import React, { Component } from 'react';
import './Portfolio.scss';
import axios from 'axios';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
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

    const form = await axios.post('/express', {
      firstname,
      lastname,
      email,
      subject,
      message
    })
  };

render() {
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
  
          <div className="form-group has-error">
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
        </form>
        </div>
    );
  }
}

export default Portfolio;