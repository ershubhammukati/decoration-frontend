// src/components/Banner.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Banner.css';

function Banner() {
  const navigate = useNavigate(); 

  const handleEnquireNowClick = () => {
    navigate('/contact-us'); 
  };

  return (
    <div className='container-fluid p-0'>
      {/* <div id="bannerCarousel" className="carousel slide carousel-fade"> */}
<div id="bannerCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">

        {/* Dots (Indicators) */}
        <div className="carousel-indicators"> 
          <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>

        {/* Images */}
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img src="/assets/hero banner.png" className="d-block w-100" alt="Banner 1" />
            <div className="carousel-caption text-center">
              <h1 className="cursive-text me-5">Balloon Decorators</h1>
              <p>Balloon Decorators</p>
              <button onClick={handleEnquireNowClick} className="btn btn-success mt-3">Enquire Now</button>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/assets/Property 1=Default (1).png" className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src="/assets/Property 1=Variant4.png" className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src="/assets/Property 1=Variant3.png" className="d-block w-100" alt="Banner 4" />
          </div>
          <div className="carousel-item">
            <img src="/assets/Property 1=Variant4.png" className="d-block w-100" alt="Banner 5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

