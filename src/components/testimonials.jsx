import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="brands">
        <div className="container">
          <div className="section-title text-center">
            <h2>Des Marques qui ont confiance en nous</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        <img src={d.img} alt="" />
                      </div>
                      <div className="testimonial-content">
                        <p>{d.text}</p>
                        <div className="testimonial-meta"> {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
