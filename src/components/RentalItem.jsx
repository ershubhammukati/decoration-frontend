// src/components/RentalItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RentalItem({ image, title, description, link }) {
  return (
    <div className="col-md-3 mb-4 text-center">
      <Link to={link} className="text-decoration-none text-dark">
        <img src={image} alt={title} className="img-fluid rounded mb-3" />
        <div style={{ backgroundColor: '#F7F8FA', padding: '15px', borderRadius: '5px' }}>
          <h5 className="fw-bold">{title}</h5>
          <p className="text-muted small mb-0">{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default RentalItem;
