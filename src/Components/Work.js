import React, { Component } from 'react';
import Project from './Project';

class Work extends Component {
  render() {
    let work = this.props.data;
    return (
      <section id="work">
        <div>
          <h1>Example Projects</h1>
          <div id="projects-container">
            {work.map((item, i) => (
              <Project
                key={`${item.name}${i}+key`}
                title={item.name}
                url={item.link}
                liveurl={item.livelink}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
