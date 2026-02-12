import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

function PedestalDetail() {
  const navigate = useNavigate();

  const handleEnquireClick = () => {
    navigate('/contact-us'); 
  };

  return (
    <div className="container my-5">
      <h2 className="text-success fw-bold mb-3">Pedestals</h2>

      <img
        src="/assets/rental2.png"
        alt="Pedestals"
        className="img-fluid rounded mb-4"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />

      <p className="text-muted">
        Bring any dessert station to life with our high-quality pedestals and cake stands. Available in various styles,
        colors, and heights to match the theme of your event perfectly.
      </p>

      <ul className="text-muted">
        <li>Available in square, round, and hexagon shapes</li>
        <li>Multiple sizes from small (2ft) to tall (4ft+)</li>
        <li>White, gold, mirrored & custom painted options</li>
        <li>Perfect for cake, cupcakes, welcome tables, and more</li>
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

export default PedestalDetail;
