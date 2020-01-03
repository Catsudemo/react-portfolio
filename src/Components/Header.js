import React, { Component } from 'react';

class Header extends Component {
  render() {
    if (this.props.data) {
      return (
        <section id="header">
          <div>
            <h1>Hi, I'm {this.props.data.firstname + ' ' + this.props.data.lastname}</h1>
            <div>
              <img src={require('./images/profile-pic.jpg')} alt="Cattrina Mott" />
              <p>Writer, performer, coding student.</p>
              <ul>
                <li>
                  <a
                    href={this.props.data.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIN
                  </a>
                </li>
                <li>
                  <a
                    href={this.props.data.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href={this.props.data.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={this.props.data.socialLinks.codepen}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codepen
                  </a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </section>
      );
    }
  }
}

export default Header;
