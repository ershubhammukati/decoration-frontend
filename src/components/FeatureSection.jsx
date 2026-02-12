// src/components/FeatureSection.jsx
import React from "react";
import "./FeatureSection.css";
import { Carousel } from "react-bootstrap";

function FeatureSection({ images, title, subtitle, description, reverse }) {
  return (
    <div className="container my-5">
      <div
        className={`row h-100 align-items-center ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="col-md-6">
            <Carousel>
              {images.map((img, index) => (
                <Carousel.Item key={index}>
                  <div className="h-cls">
                    <img
                      src={img}
                      className="d-block  rounded"
                      alt={`slide-${index}`}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
        </div>
        <div className="col-md-6">
          <h2 className="text-success fw-bold">{title}</h2>
          {subtitle && <h4 className="text-secondary fw-bold">{subtitle}</h4>}
          {/* <p className="text-muted">{description}</p> */}
          <p
  className="text-muted"
  dangerouslySetInnerHTML={{ __html: description }}
></p>

        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
