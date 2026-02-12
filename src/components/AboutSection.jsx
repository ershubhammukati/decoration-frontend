// src/components/AboutSection.jsx
import React from 'react';

function AboutSection({ image, title, subtitle, description, reverse }) {
  return (
    <div className="container my-5">
      <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="col-md-6 mb-3 mb-md-0">
          <img
  src={image}
  className="img-fluid rounded"
  style={{ maxWidth: "100%", height: "auto", display: "block" }}
  alt={title}
/>

        </div>
        <div className="col-md-6">
          <h2 className="text-success fw-bold">{title}</h2>
          {subtitle && <h4 className="text-secondary fw-bold">{subtitle}</h4>}
          <p className="text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
