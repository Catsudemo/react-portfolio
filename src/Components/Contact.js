import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1>Contact</h1>
        <div>
          <p>{this.props.data.email}</p>
          <p>Contact me now: </p>
          <div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
