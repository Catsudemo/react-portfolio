import React, { Component } from 'react';

class Education extends Component {
  render() {
    let schools = this.props.data.education;

    return (
      <section id="education">
        <div>
          <h1>Education</h1>
          <div id="education-container">
            {schools.map((item, i) => (
              <div class="education-block">
                <ul>
                  <li>School: {item.school}</li>
                  <li>Course: {item.course}</li>
                  {item.level && <li>Level: {item.level}</li>}
                  <li>Completed: {item.completed}</li>
                  <li>Location: {item.location}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
