import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div class="navbar">
          <div>
            <button>
              <a class="smoothscroll" href="#header">
                Top
              </a>
            </button>
          </div>
          <div>
            <button>
              <a class="smoothscroll" href="#about">
                About Me
              </a>
            </button>
          </div>
          <div>
            <button>
              <a class="smoothscroll" href="#work">
                Projects
              </a>
            </button>
          </div>
          <div>
            <button>
              <a class="smoothscroll" href="#education">
                Education
              </a>
            </button>
          </div>
          <div>
            <button>
              <a class="smoothscroll" href="#contact">
                Contact
              </a>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
