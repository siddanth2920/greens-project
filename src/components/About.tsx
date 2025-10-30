import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About DESSIN</h1>
        <h3 className="about-subtitle">Crafting Homes. Shaping Experiences.</h3>

        <p className="about-text">
          Founded over a decade ago, <strong>DESSIN</strong> is a multidisciplinary
          architecture and interior design studio driven by creativity, precision,
          and purpose. With a legacy of <strong>10+ years</strong> in the industry,
          we’ve successfully delivered more than <strong>20 landmark projects </strong>
          across India — from luxury residences and commercial spaces to inspiring
          workplace environments.
        </p>

        <p className="about-text">
          At DESSIN, we believe design goes beyond aesthetics — it’s about creating
          harmony between form, function, and feeling. Our team blends contemporary
          design thinking with sustainable practices to craft spaces that tell a
          story and stand the test of time.
        </p>

        <div className="about-highlight">
          <div className="highlight-box">
            <h2>10+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="highlight-box">
            <h2>20+</h2>
            <p>Completed Projects</p>
          </div>
          <div className="highlight-box">
            <h2>100%</h2>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
