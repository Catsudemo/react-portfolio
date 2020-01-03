import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    if (this.state.visibility === true) {
      this.setState({
        visibility: false,
      });
    } else {
      this.setState({
        visibility: true,
      });
    }
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <label class="switch">
            <input type="checkbox" id="toggle-contact" onClick={this.toggleVisibility} />
            <span class="slider round"></span>
          </label>
          <iframe
            title="contact-form-google"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfL4O0wMnDsgguS9pquoah0ff5B1wEJ5yuD8jv5fcv9CMNuFA/viewform?embedded=true"
            width="640"
            height="570"
            scrolling="no"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      );
    } else {
      return (
        <div>
          <label class="switch">
            <input type="checkbox" id="toggle-contact" onClick={this.toggleVisibility} />
            <span class="slider round"></span>
          </label>
        </div>
      );
    }
  }
}

export default ContactForm;
