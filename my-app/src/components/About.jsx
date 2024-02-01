import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1
              style={{
                color: "rgb(18, 49, 49)",
              }}
            >
              About Us
            </h1>
            <p className="lead mb-4">
              A company profile describes what makes your company unique. It
              automatically differentiates your brand because no other company
              has the exact same founding story A company profile describes what
              makes your company unique. It automatically differentiates your
              brand because no other company has the exact same founding story
              and reason for existing that your business does. Your history and
              values are integral parts of your brand positioning strategy, and
              a company profile is where you can mention this information
              without it feeling extraneous or out-of-place.and reason for
              existing that your business does. Your history and values are
              integral parts of your brand positioning strategy, and a company
              profile is where you can mention this information without it
              feeling extraneous or out-of-place.. It automatically
              differentiates your brand because no other company has the exact
              same founding story and reason for existing that your business
              does. Your history and values are integral parts of your brand
              positioning strategy, and a company profile is where you can
              mention this information without it feeling extraneous or
              out-of-place.
            </p>
            <NavLink
              to="/contact"
              className="btn btn-dark ms-2 px-4 rounded-pill"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/Shihab/about.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
