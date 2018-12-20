import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class HireForm extends Component {
  state = {
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@example.com';

  handleCancel() {
    this.setState({
      message: '',
      useremail: '',
      sendername: '',
    });
  }

  handleChange(event) {
    const value= event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Message sent.')

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
    } = this.props.env;

    this.sendFeedback(
      this.sender,
      receiverEmail,
      this.state.message,
      this.state.sendername,
      this.state.useremail,
    );

    this.setState({
        message: '',
        useremail: '',
        sendername: '',
      formSubmitted: true
    });
  }

  sendFeedback(senderEmail, receiverEmail, message,sendername,useremail) {
    window.emailjs
      .send('mailgun', 'template_mh0xaz6q', {
        senderEmail,
        receiverEmail,
        message,
        useremail,
        sendername,
        
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit}>
        <h1>Hire me</h1>
        <label>
          Name:
          <input type="text" 
            className="text-input2"
            id="feedback-entry2"
            name="sendername"
            value={this.state.sendername} 
            onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" 
            className="text-input3"
            id="feedback-entry3"
            name="useremail"
            value={this.state.useremail} 
            onChange={this.handleChange} />
        </label>
        <label>
            <h3>Message:</h3>
            <textarea
            className="text-input"
            id="feedback-entry"
            name="message"
            onChange={this.handleChange}
            placeholder="Enter your message"
            required
            value={this.state.message}
            />
        </label>

        <div className="btn-group">
          <button className="btn btn--cancel" onClick={this.handleCancel}>
            Cancel
          </button>
          <input type="submit" value="Submit" className="btn btn--submit" />
        </div>
      </form>
    );
  }
}

HireForm.propTypes = {
  env: PropTypes.object.isRequired
};
