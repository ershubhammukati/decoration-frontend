// src/pages/details/BackdropDetail.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BackdropDetail() {
  const navigate = useNavigate();

  const handleEnquireClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className="container my-5">
      <h2 className="text-success fw-bold mb-3">Backdrop Decor</h2>

      <img
        src="/assets/rental1.png"
        alt="Backdrop"
        className="img-fluid rounded mb-4"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />

      <p className="text-muted">
        Transform your venue with our premium event backdrops. Whether you're planning a wedding, birthday, or corporate
        event, our collection of backdrops will add elegance and style to your celebration.
      </p>

      <ul className="text-muted">
        <li>Available in sequin, shimmer, floral, and fabric options</li>
        <li>Adjustable pipe & drape setups from 6ft to 12ft tall</li>
        <li>Custom color coordination available</li>
        <li>Perfect for photo booths, stages, entrances, or cake tables</li>
      </ul>

      <div className="mt-4">
        <Link to="/rental" className="btn btn-outline-success">
          ← Back to Rental Decor
        </Link>
        <button onClick={handleEnquireClick} className="btn btn-success ms-3">
          Enquire Now
        </button>
      </div>
    </div>
  );
}

export default BackdropDetail;
