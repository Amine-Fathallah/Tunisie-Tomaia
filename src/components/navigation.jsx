import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>
            </button>
            <div className="logo-container">
              <div className="logo">
                <a href="#page-top">
                  <img src="img/testimonials/08.jpg" alt="TT logo" />
                </a>
              </div>
              <a className="navbar-brand page-scroll" href="#page-top">
                Tunisie Tomaia
              </a>
            </div>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  à propos
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="page-scroll">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#brands" className="page-scroll">
                  Marques
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  équipe
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
