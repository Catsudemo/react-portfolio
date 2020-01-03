import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      return (
        <section id="about">
          <div>
            <h1>About Me</h1>
            <div id="listcontainer">
              <ul>
                <li>Name: {this.props.data.firstname + ' ' + this.props.data.lastname}</li>
                <li>Location: {this.props.data.location}</li>
                <li>
                  Resume:{' '}
                  <a href={this.props.data.resume} target="_blank" rel="noopener noreferrer">
                    Click Here
                  </a>
                </li>
              </ul>
            </div>
            <p id="bio">{this.props.data.bio}</p>
          </div>
        </section>
      );
    }
  }
}

export default About;
